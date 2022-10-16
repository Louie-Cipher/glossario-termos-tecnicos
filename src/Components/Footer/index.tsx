import './styles.css';
import FooterLink from './FooterLink';

export default () => {
    return (
        <footer id='footer'>
            <div className='footerInfoText'>
                Criado por
                <div className='footerInfoSubText'>: Louie, Isa, Ruan, Nicolas</div>
            </div>

            <FooterLink
                img='octocat.svg'
                name='Código fonte'
                link='https://github.com/Louie-Cipher/glossario-termos-tecnicos'
            />
        </footer>
    );
};
