import * as React from 'react';
import { PropTypes, StandardProps } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { RenderButtonProps } from './Pagination';
export declare type PageButtonClassKey = 'root' | 'rootCurrent' | 'rootEllipsis' | 'rootEnd' | 'rootStandard' | 'label' | 'text' | 'textPrimary' | 'textSecondary' | 'colorInherit' | 'colorInheritCurrent' | 'colorInheritOther' | 'disabled' | 'sizeSmall' | 'sizeSmallCurrent' | 'sizeSmallEllipsis' | 'sizeSmallEnd' | 'sizeSmallStandard' | 'sizeLarge' | 'sizeLargeCurrent' | 'sizeLargeEllipsis' | 'sizeLargeEnd' | 'sizeLargeStandard' | 'fullWidth';
export declare type PageVariant = 'current' | 'ellipsis' | 'end' | 'standard';
export interface PageButtonProps extends StandardProps<ButtonProps, PageButtonClassKey, 'onClick'> {
    limit: number;
    page: number;
    total: number;
    pageVariant: PageVariant;
    currentPageColor?: PropTypes.Color;
    onClick?: (ev: React.MouseEvent<HTMLElement>, offset: number, page: number) => void;
    renderButton?: (props: RenderButtonProps) => React.ReactElement;
    otherPageColor?: PropTypes.Color;
}
declare const PageButtonWithStyles: React.ComponentType<PageButtonProps>;
export default PageButtonWithStyles;
