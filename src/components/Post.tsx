import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'
import { FormEvent, InvalidEvent, useState } from 'react'
import { Avatrar } from './Avatrar'
import { Comment } from './Comment'
import styles from './Post.module.css'


interface Author {
    name: string;
    role: string;
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}



export function Post({ author, publishedAt, content }: PostProps) {

    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',
    // }).format(publishedAt)

    const [comments, setComments] = useState([
        'Post muito bacana heim! 👏👏'
    ])

    const [newCommentsText, setNewCommentsText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRealtiveToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentsText])
        setNewCommentsText('')

    }


    function deleteComment(commentToDelete: string) {


        //nova lista de comentarios
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    function handelNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {

        event.target.setCustomValidity('Este campo é obrigatorio!')

    }

    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatrar hasBorder src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRealtiveToNow}</time>

            </header>

            <div className={styles.content}>

                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content} ><a href="#">{line.content}</a></p>
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea name='comment'
                    value={newCommentsText}
                    onChange={(e) => {
                        e.target.setCustomValidity('')
                        setNewCommentsText(e.target.value)

                    }}
                    placeholder='Deixe seu comentário...'
                    onInvalid={handelNewCommentInvalid}
                    required />


                <footer>
                    <button type='submit' disabled={newCommentsText.length === 0}>Publicar</button>
                </footer>



            </form>

            <div className={styles.commnetList}>

                {
                    comments.map(comment => {
                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    })
                }

            </div>

        </article>
    )
}
