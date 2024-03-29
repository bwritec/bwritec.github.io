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
    module("bootstrap-dropdowns");

    /**
     *
     */
    test("deve ser definido no objeto jquery", function ()
    {
        ok($(document.body).dropdown, 'método dropdown é definido.');
    });

    /**
     *
     */
    test("deve retornar o elemento", function ()
    {
        ok($(document.body).dropdown()[0] == document.body, 'document.body devolvido.');
    });

    /**
     *
     */
    test("deve adicionar classe aberta ao menu se clicado", function ()
    {
        var dropdownHTML = "" +
            "<ul class=\"tabs\">" +
                "<li class=\"dropdown\">" +
                    "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">" +
                        "Dropdown" +
                    "</a>" +
                    "<ul class=\"dropdown-menu\">" +
                        "<li>" +
                            "<a href=\"#\">" +
                                "Secondary link" +
                            "</a>" +
                        "</li>" +
                        "<li>" +
                            "<a href=\"#\">" +
                                "Something else here" +
                            "</a>" +
                        "</li>" +
                        "<li class=\"divider\"></li>" +
                        "<li>" +
                            "<a href=\"#\">" +
                                "Another link" +
                            "</a>" +
                        "</li>" +
                    "</ul>" +
                "</li>" +
            "</ul>",
            dropdown = $(dropdownHTML).find('[data-toggle="dropdown"]').dropdown().click();

        ok(dropdown.parent('.dropdown').hasClass('open'), 'classe open adicionado no click.');
    });

    test("deve remover a classe aberta se o body for clicado", function ()
    {
        var dropdownHTML = "" +
            "<ul class=\"tabs\">" +
                "<li class=\"dropdown\">" +
                    "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">" +
                        "Dropdown" +
                    "</a>" +
                    "<ul class=\"dropdown-menu\">" +
                        "<li>" +
                            "<a href=\"#\">" +
                                "Secondary link" +
                            "</a>" +
                        "</li>" +
                        "<li>" +
                            "<a href=\"#\">" +
                                "Something else here" +
                            "</a>" +
                        "</li>" +
                        "<li class=\"divider\"></li>" +
                        "<li>" +
                            "<a href=\"#\">" +
                                "Another link" +
                            "</a>" +
                        "</li>" +
                    "</ul>" +
                "</li>" +
            "</ul>",
            dropdown = $(dropdownHTML)
                .appendTo('#qunit-fixture')
                .find('[data-toggle="dropdown"]')
                .dropdown()
                .click();

        ok(dropdown.parent('.dropdown').hasClass('open'), 'classe open adicionado no click.');
        $('body').click();
        ok(!dropdown.parent('.dropdown').hasClass('open'), 'classe open removida.');
        dropdown.remove();
    });
});
