/**
 * bootstrap-modal.js v2.0.2.
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
     * DEFINIÇÃO DE CLASSE MODAL.
     */

    var Modal = function (content, options)
    {
        this.options = options;
        this.$element = $(content)
            .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this));
    }

    Modal.prototype = {
        /**
         *
         */
        constructor: Modal,

        /**
         *
         */
        toggle: function ()
        {
            return this[!this.isShown ? 'show' : 'hide']();
        },

        /**
         *
         */
        show: function ()
        {
            var that = this;

            if (this.isShown)
            {
                return;
            }

            $('body').addClass('modal-open');

            this.isShown = true;
            this.$element.trigger('show');

            escape.call(this);
            backdrop.call(this, function ()
            {
                var transition = $.support.transition && that.$element.hasClass('fade');

                /**
                 * Não mova a posição dom dos modais.
                 */
                !that.$element.parent().length && that.$element.appendTo(document.body);

                that.$element
                    .show();

                if (transition)
                {
                    /**
                     * Forçar refluxo.
                     */
                    that.$element[0].offsetWidth;
                }

                that.$element.addClass('in');

                transition ?
                    that.$element.one($.support.transition.end, function ()
                    {
                        that.$element.trigger('shown');
                    }) : that.$element.trigger('shown');
            });
        },

        /**
         *
         */
        hide: function (e)
        {
            e && e.preventDefault();

            if (!this.isShown)
            {
                return;
            }

            var that = this;
            this.isShown = false;

            $('body').removeClass('modal-open');
            escape.call(this);

            this.$element
                .trigger('hide')
                .removeClass('in');

            $.support.transition && this.$element.hasClass('fade') ?
                hideWithTransition.call(this) :
                hideModal.call(this);
        }
    }

    /**
     * MÉTODOS MODAIS PRIVADOS.
     */

    function hideWithTransition()
    {
        var that = this,
            timeout = setTimeout(function ()
            {
                that.$element.off($.support.transition.end)
                hideModal.call(that)
            }, 500);

        this.$element.one($.support.transition.end, function ()
        {
            clearTimeout(timeout);
            hideModal.call(that);
        });
    }

    function hideModal(that)
    {
        this.$element
            .hide()
            .trigger('hidden');

        backdrop.call(this)
    }

    function backdrop(callback)
    {
        var that = this,
            animate = this.$element.hasClass('fade') ? 'fade' : '';

        if (this.isShown && this.options.backdrop)
        {
            var doAnimate = $.support.transition && animate;

            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
                .appendTo(document.body);

            if (this.options.backdrop != 'static')
            {
                this.$backdrop.click($.proxy(this.hide, this));
            }

            if (doAnimate)
            {
                /**
                 * Forçar refluxo.
                 */
                this.$backdrop[0].offsetWidth;
            }

            this.$backdrop.addClass('in');

            doAnimate ?
                this.$backdrop.one($.support.transition.end, callback) :
                callback();
        } else if (!this.isShown && this.$backdrop)
        {
            this.$backdrop.removeClass('in');

            $.support.transition && this.$element.hasClass('fade')?
                this.$backdrop.one($.support.transition.end, $.proxy(removeBackdrop, this)) :
                removeBackdrop.call(this);
        } else if (callback)
        {
            callback();
        }
    }

    function removeBackdrop()
    {
        this.$backdrop.remove();
        this.$backdrop = null;
    }

    function escape()
    {
        var that = this;

        if (this.isShown && this.options.keyboard)
        {
            $(document).on('keyup.dismiss.modal', function (e)
            {
                e.which == 27 && that.hide();
            });
        } else if (!this.isShown)
        {
            $(document).off('keyup.dismiss.modal');
        }
    }

    /**
     * DEFINIÇÃO DO PLUGIN MODAL.
     */

    $.fn.modal = function (option)
    {
        return this.each(function ()
        {
            var $this = $(this),
                data = $this.data('modal'),
                options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option);

            if (!data)
            {
                $this.data('modal', (data = new Modal(this, options)));
            }

            if (typeof option == 'string')
            {
                data[option]();
            } else if (options.show)
            {
                data.show();
            }
        });
    }

    $.fn.modal.defaults = {
        backdrop: true,
        keyboard: true,
        show: true
    }

    $.fn.modal.Constructor = Modal;

    /**
     * API DE DADOS MODAL.
     */

    $(function ()
    {
        $('body').on('click.modal.data-api', '[data-toggle="modal"]', function (e)
        {
            var $this = $(this),
                href,
                $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')),
                option = $target.data('modal') ? 'toggle' : $.extend({}, $target.data(), $this.data());

            e.preventDefault();
            $target.modal(option);
        });
    });
}(window.jQuery);
