import classNames from 'classnames';
import React from 'react';
import styles from './detail-view.module.scss';
import { data } from '../../data';

export interface DetailViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const DetailView = ({ className }: DetailViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p></p>
        </div>
    );
};
