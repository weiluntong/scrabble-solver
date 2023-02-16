import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { useIsTouchDevice, useMediaQuery } from 'hooks';
import { CardChecklist, Cog, Eraser, Github, Keyboard, List, Sack } from 'icons';
import { GITHUB_PROJECT_URL } from 'parameters';
import { selectHasInvalidWords, selectHasOverusedTiles, useTranslate, useTypedSelector } from 'state';

import SquareButton from '../SquareButton';

import styles from './NavButtons.module.scss';

interface Props {
  onClear: () => void;
  onShowKeyMap: () => void;
  onShowMenu: () => void;
  onShowRemainingTiles: () => void;
  onShowSettings: () => void;
  onShowWords: () => void;
}

const NavButtons: FunctionComponent<Props> = ({
  onClear,
  onShowKeyMap,
  onShowMenu,
  onShowRemainingTiles,
  onShowSettings,
  onShowWords,
}) => {
  const translate = useTranslate();
  const hasOverusedTiles = useTypedSelector(selectHasOverusedTiles);
  const hasInvalidWords = useTypedSelector(selectHasInvalidWords);
  const isTouchDevice = useIsTouchDevice();
  const isMobile = useMediaQuery('<m');

  if (isMobile) {
    return (
      <div className={styles.navButtons}>
        <div className={styles.group}>
          <SquareButton className={styles.button} Icon={Eraser} tooltip={translate('common.clear')} onClick={onClear} />
        </div>

        <div className={styles.separator} />

        <div className={styles.group}>
          <SquareButton className={styles.button} Icon={List} tooltip={translate('menu')} onClick={onShowMenu} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.navButtons}>
      <div className={styles.group}>
        <SquareButton className={styles.button} Icon={Eraser} tooltip={translate('common.clear')} onClick={onClear} />
      </div>

      <div className={styles.separator} />

      <div className={styles.group}>
        <SquareButton
          className={classNames(styles.button, {
            [styles.error]: hasOverusedTiles,
          })}
          Icon={Sack}
          tooltip={translate('remaining-tiles')}
          onClick={onShowRemainingTiles}
        />

        <SquareButton
          className={classNames(styles.button, {
            [styles.error]: hasInvalidWords,
          })}
          Icon={CardChecklist}
          tooltip={translate('words')}
          onClick={onShowWords}
        />
      </div>

      <div className={styles.separator} />

      <div className={styles.group}>
        <SquareButton.Link
          className={styles.button}
          href={GITHUB_PROJECT_URL}
          Icon={Github}
          rel="noopener noreferrer"
          target="_blank"
          tooltip={translate('github')}
        />
      </div>

      <div className={styles.separator} />

      <div className={styles.group}>
        {!isTouchDevice && (
          <SquareButton
            className={styles.button}
            Icon={Keyboard}
            tooltip={translate('keyMap')}
            onClick={onShowKeyMap}
          />
        )}

        <SquareButton className={styles.button} Icon={Cog} tooltip={translate('settings')} onClick={onShowSettings} />
      </div>
    </div>
  );
};

export default NavButtons;
