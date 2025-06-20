/* eslint-disable import/no-unresolved */

import {
  InLineAlert,
  Icon,
  Button,
  provider as UI,
} from '@dropins/tools/components.js';
import { events } from '@dropins/tools/event-bus.js';
import * as pdpApi from '@dropins/storefront-pdp/api.js';
import { render as pdpRendered } from '@dropins/storefront-pdp/render.js';

// Containers
import ProductHeader from '@dropins/storefront-pdp/containers/ProductHeader.js';
import ProductPrice from '@dropins/storefront-pdp/containers/ProductPrice.js';
import ProductShortDescription from '@dropins/storefront-pdp/containers/ProductShortDescription.js';
import ProductOptions from '@dropins/storefront-pdp/containers/ProductOptions.js';
import ProductQuantity from '@dropins/storefront-pdp/containers/ProductQuantity.js';
import ProductDescription from '@dropins/storefront-pdp/containers/ProductDescription.js';
import ProductAttributes from '@dropins/storefront-pdp/containers/ProductAttributes.js';
import ProductGallery from '@dropins/storefront-pdp/containers/ProductGallery.js';

// Libs
import { fetchPlaceholders, setJsonLd } from '../../scripts/commerce.js';

// Initializers
import { IMAGES_SIZES } from '../../scripts/initializers/pdp.js';

import '../../scripts/initializers/cart.js';
import { rootLink } from '../../scripts/scripts.js';

export default async function decorate(block) {
  // eslint-disable-next-line no-underscore-dangle
  const product = events._lastEvent?.['pdp/data']?.payload ?? null;
  const labels = await fetchPlaceholders();

  // Layout
  const fragment = document.createRange().createContextualFragment(`
    
    <div class="container">
    <div class="column-1">
      
      <img src="/images/sp1.png" alt="Main Image" class="main-image" />
 <div class="fittingbox-trigger col-8 col-md-12" js-fittingbox-trigger="">
            <button type="button" class="btn btn-outline-secndary fittingbox-trigger__trigger-btn" data-toggle="modal" data-target="#fittingboxModal" nvi-selenium="fittingbox-modal-trigger">
                <span class="icon-vto-camera"></span> Virtual Try-On <img src="/images/icon_camra.png" width="14px"></button>
        </div>
      <!-- Thumbnail Carousel -->
      <div class="carousel-container">
       <button role="button" aria-label="Previous" class="dropin-button dropin-button--medium dropin-button--tertiary dropin-button--tertiary--disabled pdp-carousel__button--thumbnailsColumn" style="--height: 668px;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="dropin-icon dropin-icon--shape-stroke-2 pdp-carousel__button__icon--thumbnailsColumn--prev"><path d="M7.74512 9.87701L12.0001 14.132L16.2551 9.87701" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path></svg></button>
        <div class="carousel-track" id="carouselTrack">
          <img src="/images/sp1t.png" alt="Thumb 1">
          <img src="/images/sp2t.png" alt="Thumb 2">
          <img src="/images/sp3t.png" alt="Thumb 3">
          <img src="/images/sp4t.png" alt="Thumb 4">
        </div>
<button role="button" aria-label="Next" class="dropin-button dropin-button--medium dropin-button--tertiary pdp-carousel__button--thumbnailsColumn" style="--height: 668px;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="dropin-icon dropin-icon--shape-stroke-2 pdp-carousel__button__icon--thumbnailsColumn--next"><path d="M7.74512 9.87701L12.0001 14.132L16.2551 9.87701" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path></svg></button>      </div>

      <div class="dots-container">
    <div class="dot blue"></div>
    <div class="dot white"></div>
    <div class="dot white"></div>
  </div>


  
<div class="pdp-accordion">
  <div class="pdp-accordion-header" >
    <span>Measurements</span>
    <span class="accordion-icon">–</span>
  </div>
  <div class="pdp-accordion-body">
    <div class="pdp-measurment-img">
      <div class="pdp-measurment-img-text-lens">
        <div class="pdp-lens-width">Lens Width</div>
        <img src="/images/LensWidth.png" alt="LensWidth" style="width: 104px; height: 45px;">
        <div class="pdp-lens-number frame_eye_size">50mm</div>
      </div>

      <div class="pdp-measurment-img-text-lens">
        <div class="pdp-lens-width">Bridge Width</div>
        <img src="/images/BridgeWidth.png" style="width: 104px; height: 45px;">
        <div class="pdp-lens-number frame_bridge_size">18mm</div>
      </div>

      <div class="pdp-measurment-img-text-lens">
        <div class="pdp-lens-width">Temple Length</div>
        <img src="/images/TempleLength.png" style="width: 104px; height: 45px;">
        <div class="pdp-lens-number frame_temple_size">140mm</div>
      </div>

      <div class="pdp-measurment-img-text-lens">
        <div class="pdp-lens-width">Lens Height</div>
        <img src="/images/LensWidth.png" style="width: 104px; height: 45px;">
        <div class="pdp-lens-number pdp_lh_number">40.3mm</div>
      </div>
    </div>

    <div class="pdp-sizingguide">
      <a href="#">
        Sizing Guide <img src="/images/icon_camra.png" width="14px">
      </a>
    </div>
  </div>
</div>
 
<div class="pdp-accordion">
  <div class="pdp-accordion-header" >
    <span>Specs</span>
    <span class="accordion-icon">–</span>
  </div>
  <div class="pdp-accordion-body">
   <div class="t-pdp__product-specs">
                    <div class="m-product-specs">
                      
                        <div class="m-product-specs__content">
                            <ul class="m-product-specs__list">
                                <li class="m-product-specs__item">
                                    <span class="m-product-specs__item-label">
                                        Brand
                                    </span>
                                    <span class="m-product-specs__item-value">
                                        <a aria-label="Brand: &nbsp; Ray-Ban®" href="#">Sofia Vergara</a>
                                    </span>
                                </li>
                                
                                <li class="m-product-specs__item">
                                    <span class="m-product-specs__item-label">
                                        Frame Material
                                    </span>
                                    <span class="m-product-specs__item-value">
                                        <a aria-label="Frame Material: &nbsp;" href="#"><span class="material_desc"></span></a>
                                    </span>
                                </li>
                                <li class="m-product-specs__item">
                                    <span class="m-product-specs__item-label">
                                        Frame Shape
                                    </span>
                                    <span class="m-product-specs__item-value frame_Shape">
                                        <a aria-label="Frame Shape: &nbsp; Square" href="/sunglasses/square/c/600">
                                            Square
                                        </a>
                                    </span>
                                </li>
                                <li class="m-product-specs__item">
                                    <span class="m-product-specs__item-label">
                                        Frame Type
                                    </span>
                                    <span class="m-product-specs__item-value">
                                        <a aria-label="Frame Type: " href="/sunglasses/full%E2%80%93rim/c/600"><span class="frame_type"></span></a>
                                    </span>
                                </li>
                                <li class="m-product-specs__item">
                                    <span class="m-product-specs__item-label">
                                        SKU
                                    </span>
                                    <span class="m-product-specs__item-value m-product-specs__item-value--sku">
                                        160384</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
  </div>
</div>


<div class="pdp-accordion overview">
  <div class="pdp-accordion-header" >
    <span>Overview</span>
    <span class="accordion-icon">–</span>
  </div>
  <div class="pdp-accordion-body">
    <p> Highly Sought-after & Iconic</p>
<p>Privé Revaux styles stand the test of time and The Visionary is no exception. The bold tortoise pattern and design can be powerful presence! 
</p><p>
The Visionary is a great unisex rectangular shape with side rivet details. </p>

  </div>
</div>


    </div>
    <div class="column-2 pdp-right-section">
     <div class="featured-facet">
                        <div class="staff-picks badge-display " >
                            <p>Staff Pick</p>
                        </div>
            </div>
      <h3 class="pdp-name"><span class="pdp-title">Prive Revaux Visionary </span><span class="pdp-fevorate"><img src="/images/iconfav.svg" width="24" height="24"></h3>
      <h3 class="pdp-price">$<span class="pdp-price-final">230</span> <del class="pdp-strik-price">$200 </del></h3>
      <div class="item-price-color-wrap">
      <p>Color name</p>
      <div id="pdp-color-options">
       
      </div>

      <button class="lens-button">Select Lens Options</button>
<div class="paypal-block">
                                <div class="paypal-imgblock">
                                    <img src="https://www.americasbest.com/_ui/responsive/common/images/paypal.svg"  class="paypal-logo" alt="Paypal">
                                    <span class="paypal-available">Available</span>
                                </div>
                            </div>
      <div class="info-section">
       
        <div class="info-item info-cart"><img src="/images/info-cart.svg" width="24" height="24"><span>30 day return policy - no questions asked</span></div>
        <div class="info-item info-home"><img src="/images/info-home.svg" width="24" height="24" ><span>Free in-store adjustments</span></div>
        <div class="info-item info-lock"><img src="/images/info-lock.svg" width="24" height="24"><span>Free shipping for ALL orders</span></div>
      </div>
      </div>
    </div>
  </div>
 
   
  `);

  const $alert = fragment.querySelector('.product-details__alert');
  const $gallery = fragment.querySelector('.product-details__gallery');
  const $header = fragment.querySelector('.product-details__header');
  const $price = fragment.querySelector('.product-details__price');
  const $galleryMobile = fragment.querySelector('.product-details__right-column .product-details__gallery');
  const $shortDescription = fragment.querySelector('.product-details__short-description');
  const $options = fragment.querySelector('.product-details__options');
  const $quantity = fragment.querySelector('.product-details__quantity');
  const $addToCart = fragment.querySelector('.product-details__buttons__add-to-cart');
  const $addToWishlist = fragment.querySelector('.product-details__buttons__add-to-wishlist');
  const $description = fragment.querySelector('.product-details__description');
  const $attributes = fragment.querySelector('.product-details__attributes');

  block.appendChild(fragment);

  // Alert
  let inlineAlert = null;
 const productData = {
    "data": {
        "products": {
            "aggregations": [
                {
                    "attribute_code": "color",
                    "count": 2,
                    "label": "Color",
                    "options": [
                        {
                            "value": "#ebebeb"
                        },
                        {
                            "value": "Black"
                        }
                    ]
                },
                {
                    "attribute_code": "manufacturer",
                    "count": 1,
                    "label": "Manufacturer",
                    "options": [
                        {
                            "value": "Prive Goods"
                        }
                    ]
                },
                {
                    "attribute_code": "nvi_product_type",
                    "count": 1,
                    "label": "NVI Product Type",
                    "options": [
                        {
                            "value": "FR"
                        }
                    ]
                },
                {
                    "attribute_code": "frame_shape",
                    "count": 1,
                    "label": "Frame Shape",
                    "options": [
                        {
                            "value": "SQU"
                        }
                    ]
                },
                {
                    "attribute_code": "frame_ege_typ",
                    "count": 1,
                    "label": "Frame Ege Type",
                    "options": [
                        {
                            "value": "HBVL"
                        }
                    ]
                },
                {
                    "attribute_code": "gender",
                    "count": 1,
                    "label": "Gender",
                    "options": [
                        {
                            "value": "Men's"
                        }
                    ]
                },
                {
                    "attribute_code": "frame_type",
                    "count": 1,
                    "label": "Frame Type",
                    "options": [
                        {
                            "value": "Full Rim"
                        }
                    ]
                },
                {
                    "attribute_code": "aux_status_code",
                    "count": 1,
                    "label": "Aux Status Code",
                    "options": [
                        {
                            "value": "A"
                        }
                    ]
                },
                {
                    "attribute_code": "status_code",
                    "count": 1,
                    "label": "Status Code",
                    "options": [
                        {
                            "value": "N"
                        }
                    ]
                },
                {
                    "attribute_code": "frame_temple_size",
                    "count": 1,
                    "label": "Frame Temple Size",
                    "options": [
                        {
                            "value": "140"
                        }
                    ]
                },
                {
                    "attribute_code": "frame_bridge",
                    "count": 1,
                    "label": "Frame Bridge",
                    "options": [
                        {
                            "value": "17"
                        }
                    ]
                },
                {
                    "attribute_code": "frame_eye_size",
                    "count": 1,
                    "label": "Frame Eye Size",
                    "options": [
                        {
                            "value": "55"
                        }
                    ]
                },
                {
                    "attribute_code": "measurement_b",
                    "count": 1,
                    "label": "Measurement B",
                    "options": [
                        {
                            "value": "45"
                        }
                    ]
                },
                {
                    "attribute_code": "material_desc",
                    "count": 1,
                    "label": "Material Desc",
                    "options": [
                        {
                            "value": "Plastic"
                        }
                    ]
                },
                {
                    "attribute_code": "master_sku_number",
                    "count": 1,
                    "label": "Master SKU Number",
                    "options": [
                        {
                            "value": "255828"
                        }
                    ]
                }
            ],
            "items": [
                {
                    "id": 145107,
                    "sku": "255828",
                    "name": "Prive Revaux Visionary",
                    "options": null,
                    "price_range": {
                        "minimum_price": {
                            "regular_price": {
                                "value": 89.95,
                                "currency": "USD"
                            }
                        }
                    },
                    "categories": [],
                    "style_number": "MLK",
                    "style_group_number": "VISIONARY",
                    "per_box_count": null,
                    "brand": null,
                    "dominance": null,
                    "multifocal_add": null,
                    "lens_type": null,
                    "product_tag": null,
                    "manufacturer": "2970",
                    "websites": [
                        {
                            "id": 3,
                            "name": "America's Best"
                        }
                    ]
                }
            ],
            "total_count": 1
        }
    }
};
const itemsproduct = productData.data.products.items[0];
const skuids = itemsproduct.sku;
const pdpname = itemsproduct.name;
const pdpprice = itemsproduct.price_range.minimum_price.regular_price.value;
const aggregations = productData.data.products.aggregations;
const frameShapeAgg = aggregations.find(attr => attr.attribute_code === "frame_shape");
const frame_temple_size = aggregations.find(attr => attr.attribute_code === "frame_temple_size");
const frame_temple_size_value=frame_temple_size.options[0].value;
const frame_bridge = aggregations.find(attr => attr.attribute_code === "frame_bridge");
const frame_bridge_value=frame_bridge.options[0].value;
const frame_eye_size = aggregations.find(attr => attr.attribute_code === "frame_eye_size");
const frame_eye_size_value=frame_eye_size.options[0].value;
const fmaterial_desc = aggregations.find(attr => attr.attribute_code === "material_desc");
const material_desc_value=fmaterial_desc.options[0].value;
const frame_type = aggregations.find(attr => attr.attribute_code === "frame_type");
const frame_type_value=frame_type.options[0].value;


const brandtype=itemsproduct.brand;


document.querySelector(".pdp-price-final").innerText=pdpprice;
document.querySelector(".pdp-title").innerText=pdpname;
document.querySelector(".m-product-specs__item-value--sku").innerText=skuids;
document.querySelector(".frame_temple_size").innerText=frame_temple_size_value+"mm";
document.querySelector(".frame_bridge_size").innerText=frame_bridge_value+"mm";
document.querySelector(".frame_eye_size").innerText=frame_eye_size_value+"mm";
document.querySelector(".material_desc").innerText=material_desc_value;
document.querySelector(".frame_type").innerText=frame_type_value;



if (frameShapeAgg && frameShapeAgg.options.length > 0) {
    const frameShapeValue = frameShapeAgg.options[0].value;
document.querySelector(".frame_Shape").innerText=frameShapeValue;
}

const colorOptions = productData.data.products.aggregations.find(attr => attr.attribute_code === "color").options;
  const container = document.getElementById('pdp-color-options');
   container.innerHTML = '';

  colorOptions.forEach((opt, index) => {
    const colorVal = opt.value;
    const id = `color-${index}`;

    const wrapper = document.createElement('div');
    wrapper.className = 'color-option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'color';
    input.id = id;
    input.value = colorVal;

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.style.backgroundColor = colorVal;

    wrapper.appendChild(input);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });

function toggleAccordion(header) {
    const body = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    const isOpen = body.style.display === 'none';

    body.style.display = isOpen ? 'block' : 'none';
    icon.textContent = isOpen ? '–' : '+';
  }
  document.querySelectorAll('.pdp-accordion-header').forEach(icon => {
  icon.addEventListener('click', function (event) {
    const header = this.closest('.pdp-accordion-header');
    toggleAccordion(header);
    event.stopPropagation(); 
  });
});


  // Render Containers
  const [
    _galleryMobile,
    _gallery,
    _header,
    _price,
    _shortDescription,
    _options,
    _quantity,
    addToCart,
    addToWishlist,
    _description,
    _attributes,
  ] = await Promise.all([
    // Gallery (Mobile)
    pdpRendered.render(ProductGallery, {
      controls: 'dots',
      arrows: true,
      peak: false,
      gap: 'small',
      loop: false,
      imageParams: {
        ...IMAGES_SIZES,
      },
    })($galleryMobile),

    // Gallery (Desktop)
    pdpRendered.render(ProductGallery, {
      controls: 'thumbnailsColumn',
      arrows: true,

      peak: true,
      gap: 'small',
      loop: false,
      imageParams: {
        ...IMAGES_SIZES,
      },
    })($gallery),

    // Header
    pdpRendered.render(ProductHeader, {})($header),

    // Price
    pdpRendered.render(ProductPrice, {})($price),

    // Short Description
    pdpRendered.render(ProductShortDescription, {})($shortDescription),

    // Configuration - Swatches
    pdpRendered.render(ProductOptions, { hideSelectedValue: false })($options),

    // Configuration  Quantity
    pdpRendered.render(ProductQuantity, {})($quantity),

    // Configuration – Button - Add to Cart
    UI.render(Button, {
      children: labels.PDP?.Product?.AddToCart?.label,
      icon: Icon({ source: 'Cart' }),
      onClick: async () => {
        try {
          addToCart.setProps((prev) => ({
            ...prev,
            children: labels.Custom?.AddingToCart?.label,
            disabled: true,
          }));

          // get the current selection values
          const values = pdpApi.getProductConfigurationValues();
          const valid = pdpApi.isProductConfigurationValid();

          // add the product to the cart
          if (valid) {
            const { addProductsToCart } = await import('@dropins/storefront-cart/api.js');
            await addProductsToCart([{ ...values }]);
          }

          // reset any previous alerts if successful
          inlineAlert?.remove();
        } catch (error) {
          // add alert message
          inlineAlert = await UI.render(InLineAlert, {
            heading: 'Error',
            description: error.message,
            icon: Icon({ source: 'Warning' }),
            'aria-live': 'assertive',
            role: 'alert',
            onDismiss: () => {
              inlineAlert.remove();
            },
          })($alert);

          // Scroll the alertWrapper into view
          $alert.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        } finally {
          addToCart.setProps((prev) => ({
            ...prev,
            children: labels.PDP?.Product?.AddToCart?.label,
            disabled: false,
          }));
        }
      },
    })($addToCart),

    // Configuration - Add to Wishlist
    UI.render(Button, {
      icon: Icon({ source: 'Heart' }),
      variant: 'secondary',
      'aria-label': labels.Custom?.AddToWishlist?.label,
      onClick: async () => {
        try {
          addToWishlist.setProps((prev) => ({
            ...prev,
            disabled: true,
            'aria-label': labels.Custom?.AddingToWishlist?.label,
          }));

          const values = pdpApi.getProductConfigurationValues();

          if (values?.sku) {
            const wishlist = await import('../../scripts/wishlist/api.js');
            await wishlist.addToWishlist(values.sku);
          }
        } catch (error) {
          console.error(error);
        } finally {
          addToWishlist.setProps((prev) => ({
            ...prev,
            disabled: false,
            'aria-label': labels.Custom?.AddToWishlist?.label,
          }));
        }
      },
    })($addToWishlist),

    // Description
    pdpRendered.render(ProductDescription, {})($description),

    // Attributes
    pdpRendered.render(ProductAttributes, {})($attributes),
  ]);

  // Lifecycle Events
  events.on('pdp/valid', (valid) => {
    // update add to cart button disabled state based on product selection validity
    addToCart.setProps((prev) => ({ ...prev, disabled: !valid }));
  }, { eager: true });

  // Set JSON-LD and Meta Tags
  events.on('aem/lcp', () => {
    if (product) {
      setJsonLdProduct(product);
      setMetaTags(product);
      document.title = product.name;
    }
  }, { eager: true });

  return Promise.resolve();
}

async function setJsonLdProduct(product) {
  const {
    name,
    inStock,
    description,
    sku,
    urlKey,
    price,
    priceRange,
    images,
    attributes,
  } = product;
  const amount = priceRange?.minimum?.final?.amount || price?.final?.amount;
  const brand = attributes.find((attr) => attr.name === 'brand');

  // get variants
  const { data } = await pdpApi.fetchGraphQl(`
    query GET_PRODUCT_VARIANTS($sku: String!) {
      variants(sku: $sku) {
        variants {
          product {
            sku
            name
            inStock
            images(roles: ["image"]) {
              url
            }
            ...on SimpleProductView {
              price {
                final { amount { currency value } }
              }
            }
          }
        }
      }
    }
  `, {
    method: 'GET',
    variables: { sku },
  });

  const variants = data?.variants?.variants || [];

  const ldJson = {
    '@context': 'http://schema.org',
    '@type': 'Product',
    name,
    description,
    image: images[0]?.url,
    offers: [],
    productID: sku,
    brand: {
      '@type': 'Brand',
      name: brand?.value,
    },
    url: new URL(rootLink(`/products/${urlKey}/${sku}`), window.location),
    sku,
    '@id': new URL(rootLink(`/products/${urlKey}/${sku}`), window.location),
  };

  if (variants.length > 1) {
    ldJson.offers.push(...variants.map((variant) => ({
      '@type': 'Offer',
      name: variant.product.name,
      image: variant.product.images[0]?.url,
      price: variant.product.price.final.amount.value,
      priceCurrency: variant.product.price.final.amount.currency,
      availability: variant.product.inStock ? 'http://schema.org/InStock' : 'http://schema.org/OutOfStock',
      sku: variant.product.sku,
    })));
  } else {
    ldJson.offers.push({
      '@type': 'Offer',
      price: amount?.value,
      priceCurrency: amount?.currency,
      availability: inStock ? 'http://schema.org/InStock' : 'http://schema.org/OutOfStock',
    });
  }

  setJsonLd(ldJson, 'product');
}

function createMetaTag(property, content, type) {
  if (!property || !type) {
    return;
  }
  let meta = document.head.querySelector(`meta[${type}="${property}"]`);
  if (meta) {
    if (!content) {
      meta.remove();
      return;
    }
    meta.setAttribute(type, property);
    meta.setAttribute('content', content);
    return;
  }
  if (!content) {
    return;
  }
  meta = document.createElement('meta');
  meta.setAttribute(type, property);
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
}

function setMetaTags(product) {
  if (!product) {
    return;
  }

  const price = product.prices.final.minimumAmount ?? product.prices.final.amount;

  createMetaTag('title', product.metaTitle || product.name, 'name');
  createMetaTag('description', product.metaDescription, 'name');
  createMetaTag('keywords', product.metaKeyword, 'name');

  createMetaTag('og:type', 'product', 'property');
  createMetaTag('og:description', product.shortDescription, 'property');
  createMetaTag('og:title', product.metaTitle || product.name, 'property');
  createMetaTag('og:url', window.location.href, 'property');
  const mainImage = product?.images?.filter((image) => image.roles.includes('thumbnail'))[0];
  const metaImage = mainImage?.url || product?.images[0]?.url;
  createMetaTag('og:image', metaImage, 'property');
  createMetaTag('og:image:secure_url', metaImage, 'property');
  createMetaTag('product:price:amount', price.value, 'property');
  createMetaTag('product:price:currency', price.currency, 'property');
}



