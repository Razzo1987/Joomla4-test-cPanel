/**
* PLEASE DO NOT MODIFY THIS FILE. WORK ON THE ES6 VERSION.
* OTHERWISE YOUR CHANGES WILL BE REPLACED ON THE NEXT BUILD.
**/

/**
 * @package     Joomla.JavaScript
 * @copyright   Copyright (C) 2005 - 2020 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
(function (window, document) {
  'use strict';

  window.JoomlainitReCaptchaInvisible = function () {
    var elements = [].slice.call(document.getElementsByClassName('g-recaptcha'));
    var optionKeys = ['sitekey', 'badge', 'size', 'tabindex', 'callback', 'expired-callback', 'error-callback'];
    elements.forEach(function (element) {
      var options = {};

      if (element.dataset) {
        options = element.dataset;
      } else {
        optionKeys.forEach(function (key) {
          var optionKeyFq = "data-".concat(optionKeys[key]);

          if (element.hasAttribute(optionKeyFq)) {
            options[optionKeys[key]] = element.getAttribute(optionKeyFq);
          }
        });
      } // Set the widget id of the recaptcha item


      element.setAttribute('data-recaptcha-widget-id', window.grecaptcha.render(element, options)); // Execute the invisible reCAPTCHA

      window.grecaptcha.execute(element.getAttribute('data-recaptcha-widget-id'));
    });
  };
})(window, document);