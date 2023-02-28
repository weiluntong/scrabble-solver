import classNames from 'classnames';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { useMeasure } from 'react-use';
import { FixedSizeList } from 'react-window';

import { LOCALE_FEATURES } from 'i18n';
import { RESULTS_ITEM_HEIGHT } from 'parameters';
import {
  selectAreResultsOutdated,
  selectIsLoading,
  selectLocale,
  selectSolveError,
  selectSortedFilteredResults,
  selectSortedResults,
  useTranslate,
  useTypedSelector,
} from 'state';

import EmptyState from '../EmptyState';
import Loading from '../Loading';
import ResultsInput from '../ResultsInput';
import Sizer from '../Sizer';

import HeaderButton from './HeaderButton';
import Result from './Result';
import styles from './Results.module.scss';
import SolveButton from './SolveButton';
import { ResultCallbacks, ResultData } from './types';
import useColumns from './useColumns';

interface Props {
  callbacks: ResultCallbacks;
  highlightedIndex?: number;
}

const Results: FunctionComponent<Props> = ({ callbacks, highlightedIndex }) => {
  const translate = useTranslate();
  const locale = useTypedSelector(selectLocale);
  const { direction } = LOCALE_FEATURES[locale];
  const allResults = useTypedSelector(selectSortedResults);
  const filteredResults = useTypedSelector(selectSortedFilteredResults);
  const results = filteredResults || [];
  const isLoading = useTypedSelector(selectIsLoading);
  const isOutdated = useTypedSelector(selectAreResultsOutdated);
  const error = useTypedSelector(selectSolveError);
  const itemData = useMemo(() => ({ ...callbacks, highlightedIndex, results }), [callbacks, highlightedIndex, results]);
  const [sizerRef, { height, width }] = useMeasure<HTMLDivElement>();
  const [listRef, setListRef] = useState<FixedSizeList<ResultData> | null>(null);
  const columns = useColumns();
  const scrollToIndex = typeof highlightedIndex === 'number' ? highlightedIndex : 0;

  useEffect(() => {
    // without setTimeout, the initial scrolling offset is calculated
    // incorrectly, as the list is not fully rendered by the browser yet
    const timeout = globalThis.setTimeout(() => {
      if (listRef) {
        listRef.scrollToItem(scrollToIndex, 'center');
      }
    }, 0);

    return () => {
      globalThis.clearTimeout(timeout);
    };
  }, [listRef, scrollToIndex]);

  return (
    <div className={styles.results}>
      <div className={styles.header}>
        {columns.map((column) => (
          <HeaderButton column={column} key={column.id} />
        ))}
      </div>

      <div className={styles.content}>
        <Sizer ref={sizerRef} />

        {typeof error !== 'undefined' && (
          <EmptyState className={styles.emptyState} variant="error">
            {error.message}
          </EmptyState>
        )}

        {typeof error === 'undefined' && typeof filteredResults === 'undefined' && (
          <EmptyState className={styles.emptyState} variant="info">
            {translate('results.empty-state.uninitialized')}

            <SolveButton className={styles.solveButton} />
          </EmptyState>
        )}

        {typeof error === 'undefined' &&
          typeof filteredResults !== 'undefined' &&
          typeof allResults !== 'undefined' && (
          <>
            {isOutdated && (
              <EmptyState className={styles.emptyState} variant="info">
                {translate('results.empty-state.outdated')}

                <SolveButton className={styles.solveButton} />
              </EmptyState>
            )}

            {!isOutdated && (
              <>
                {allResults.length === 0 && (
                  <EmptyState className={styles.emptyState} variant="warning">
                    {translate('results.empty-state.no-results')}
                  </EmptyState>
                )}

                {allResults.length > 0 && filteredResults.length === 0 && (
                  <EmptyState className={styles.emptyState} variant="info">
                    {translate('results.empty-state.no-filtered-results')}
                  </EmptyState>
                )}

                {allResults.length > 0 && filteredResults.length > 0 && (
                  <div className={styles.listContainer}>
                    <FixedSizeList
                      className={classNames(styles.list, {
                        [styles.outdated]: isOutdated,
                      })}
                      direction={direction}
                      height={height}
                      itemCount={filteredResults.length}
                      itemData={itemData}
                      itemSize={RESULTS_ITEM_HEIGHT}
                      ref={setListRef}
                      width={width}
                    >
                      {Result}
                    </FixedSizeList>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>

      {typeof error === 'undefined' && typeof filteredResults !== 'undefined' && typeof allResults !== 'undefined' && (
        <>{allResults.length > 0 && !isOutdated && <ResultsInput />}</>
      )}

      {isLoading && <Loading />}
    </div>
  );
};

export default Results;
