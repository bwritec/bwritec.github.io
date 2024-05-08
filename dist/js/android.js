/**
 * Copyright (C) <ano>  Chifrudo <chifrudo@localhost.com.br>
 *
 * Este programa é um software livre: você pode redistribuí-lo e/ou
 * modificá-lo sob os termos da GNU General Public License conforme
 * publicada por a Free Software Foundation, seja a versão 3 da
 * Licença, ou (a seu critério) qualquer versão posterior.
 *
 * Este programa é distribuído na esperança de que seja útil,
 * mas SEM QUALQUER GARANTIA; mesmo sem a garantia implícita de
 * COMERCIABILIDADE ou ADEQUAÇÃO PARA UM FIM ESPECÍFICO. Veja a
 * Licença Pública Geral GNU para mais detalhes.
 *
 * Você deve ter recebido uma cópia da GNU General Public License
 * juntamente com este programa. Caso contrário, consulte
 * <https://www.gnu.org/licenses/>.
 */


/**
 * Questão: Será que tem span ?
 *     Então vamos possivelmente tentar detectar o span.
 */
function android()
{
    /**
     * Questão: uma serie de comentarios são enviados caso o usuario
     * não esteja falando a verdade ! Primeiro vamos descobrir, sera
     * que você está usando um robô ?
     */
    if (navigator.userAgent.indexOf("Android") === -1)
    {
        /**
         * Sim, você está acessando esse site de robô hoje, então devemos
         * enviar uma coleção de padrões compativel com suas condições.
         */
        $(document.body).append("<span class=\"Chefão né ?\" style=\"display: inline-flex;\"></span>");
        $(document.body).append("<span class=\"Vida bandida é assim mesmo...\" style=\"display: inline-flex;\"></span>");
        $(document.body).append("<span class=\"Ainda diz que tem iphone.\" style=\"display: inline-flex;\"></span>");

        /**
         * Continue aqui !
         */
    }
}
