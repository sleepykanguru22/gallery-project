import classNames from 'classnames';
import styles from './nav-bar.module.scss';

export interface NavBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavBar = ({ className }: NavBarProps) => {
    return <div className={classNames(styles.root, className)}>NavBar</div>;
};
