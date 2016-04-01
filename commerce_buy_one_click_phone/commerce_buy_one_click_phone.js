Drupal.behaviors.commerce_buy_one_click_phone = {
  attach: function (context) {
    jQuery(document).ready(function() {
      jQuery("#edit-commerce-buy-one-click-phone").mask("+7(999)9999999");
    });
  }
};