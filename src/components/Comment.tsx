import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react';
import { Avatrar } from './Avatrar';
import styles from './Coment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeleteComment() {
        console.log('delete')

        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatrar hasBorder={false} src="https://github.com/frantecbh.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Francisco Menezes</strong>
                            <time dateTime='2022-05-11 00:15:30'>Cerca de 1hs</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentario'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>

                </footer>
            </div>
        </div>
    )
}
