import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve postar 2 comentários', () =>  {
        render(<PostComment />)

        const textareaElement = screen.getByTestId('txt-comment')
        const buttonElement = screen.getByTestId('btn-submit')

        // comentario 1
        fireEvent.change(textareaElement, {
            target: {
                value: 'Testando o primeiro comentario'
            }
        })
        fireEvent.click(buttonElement)

        // comentario 2
        fireEvent.change(textareaElement, {
            target: {
                value: 'Testando o segundo comentario'
            }
        })
        fireEvent.click(buttonElement)

        // const comentario = screen.getTestById('comentario')
        const comentario = screen.getAllByTestId('comentario')

        // console.log(comentario.length)
        expect(comentario).toHaveLength(2)
    })
});