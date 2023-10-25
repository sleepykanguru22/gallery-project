import classNames from 'classnames';
import styles from './gallery-view.module.scss';

export interface GalleryViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GalleryView = ({ className }: GalleryViewProps) => {
    return <div className={classNames(styles.root, className)}>GalleryView</div>;
};
