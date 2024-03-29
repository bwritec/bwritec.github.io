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
 *
 */
$(function ()
{
    module("bootstrap-alerts");

    /**
     *
     */
    test("deve ser definido no objeto jquery", function ()
    {
        ok($(document.body).alert, 'método de alerta é definido.');
    });

    /**
     *
     */
    test("deve retornar o elemento", function ()
    {
        ok($(document.body).alert()[0] == document.body, 'document.body devolvido.');
    });

    /**
     *
     */
    test("deve desaparecer o elemento ao clicar em .close", function ()
    {
        var alertHTML = "" +
            "<div class=\"alert-message warning fade in\">" +
                "<a class=\"close\" href=\"#\" data-dismiss=\"alert\">" +
                    "×" +
                "</a>" +
                "<p>"+
                    "<strong>" +
                        "Holy guacamole!" +
                    "</strong> Best check yo self, you're not looking too good." +
                "</p>" +
            "</div>",
            alert = $(alertHTML).alert();

        alert.find('.close').click();
        ok(!alert.hasClass('in'), 'Remover a classe .in em click\'s ".close".');
    });

    /**
     *
     */
    test("deve remover o elemento ao clicar em .close", function ()
    {
        $.support.transition = false;

        var alertHTML = "" +
            "<div class=\"alert-message warning fade in\">" +
                "<a class=\"close\" href=\"#\" data-dismiss=\"alert\">" +
                    "×" +
                "</a>" +
                "<p>" +
                    "<strong>" +
                        "Holy guacamole !" +
                    "</strong> Best check yo self, you're not looking too good." +
                "</p>" +
            "</div>",
            alert = $(alertHTML).appendTo('#qunit-fixture').alert();

        ok($('#qunit-fixture').find('.alert-message').length, 'elemento adicionado ao dom.');
        alert.find('.close').click();
        ok(!$('#qunit-fixture').find('.alert-message').length, 'elemento removido do dom.');
    });
});
