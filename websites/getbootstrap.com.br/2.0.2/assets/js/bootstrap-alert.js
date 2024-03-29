/**
 * bootstrap-alert.js v2.0.2.
 *
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
!function($)
{
    "use strict";

    /**
     * DEFINIÇÃO DE CLASSE DE ALERTA.
     */

    var dismiss = '[data-dismiss="alert"]',
        Alert = function (el)
        {
            $(el).on('click', dismiss, this.close)
        };

        /**
         *
         */
        Alert.prototype = {
            /**
             *
             */
            constructor: Alert,

            /**
             *
             */
            close: function (e)
            {
                var $this = $(this),
                    selector = $this.attr('data-target'),
                    $parent;

                if (!selector)
                {
                    selector = $this.attr('href');

                    /**
                     * Tira para ie7.
                     */
                    selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
                }

                $parent = $(selector);
                $parent.trigger('close');

                e && e.preventDefault();

                $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent());
                $parent
                    .trigger('close')
                    .removeClass('in');

                /**
                 *
                 */
                function removeElement()
                {
                    $parent
                        .trigger('closed')
                        .remove();
                }

                $.support.transition && $parent.hasClass('fade') ?
                    $parent.on($.support.transition.end, removeElement) :
                    removeElement();
            }
        }

        /**
         * DEFINIÇÃO DO PLUGIN DE ALERTA.
         */

        $.fn.alert = function (option)
        {
            return this.each(function ()
            {
                var $this = $(this),
                    data = $this.data('alert');

                if (!data)
                {
                    $this.data('alert', (data = new Alert(this)));
                }

                if (typeof option == 'string')
                {
                    data[option].call($this);
                }
            });
        }

        /**
         *
         */
        $.fn.alert.Constructor = Alert;

        /**
         * ALERT DATA-API.
         */

        $(function ()
        {
            $('body').on('click.alert.data-api', dismiss, Alert.prototype.close);
        });
}(window.jQuery);
