import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatrar({ hasBorder = true, ...rest }: AvatarProps) {



    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...rest} />
    )
}

