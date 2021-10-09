/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AlertComponent {
        "action": string;
        "icon": string;
        "text": string;
        "variant": string;
        "width": string;
    }
    interface AvatarComponent {
        /**
          * Alternate text when src image breaks
          * @type {string}
          * @memberof AvatarComponent
         */
        "alt": string;
        /**
          * Custom class for the image
          * @type {string}
          * @memberof AvatarComponent
         */
        "className": string;
        /**
          * Avatar image size
          * @type {('small' | 'medium' | 'large')}
          * @memberof AvatarComponent
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * Image source url
          * @type {string}
          * @memberof AvatarComponent
         */
        "src": string;
        /**
          * Show title of the image on hover
          * @type {string}
          * @memberof AvatarComponent
         */
        "title": string;
        /**
          * Avatar image shape variants
          * @type {('circular' | 'rounded' | 'square')}
          * @memberof AvatarComponent
         */
        "variant": 'circular' | 'rounded' | 'square';
    }
    interface GoogleTagManager {
        /**
          * The google tag manage container ID
         */
        "containerId": string;
    }
    interface ImageComponent {
        "srcImg": string;
        "srcImgName": string;
        "srcNextGen": string;
    }
    interface ModalWindow {
        "cancelText": string;
        "confirmText": string;
        "pointerEvents": boolean;
        "title": string;
    }
    interface MyButton {
        "color": string;
        "icon": string;
        "name": string;
        "type": string;
        "typeButtton": string;
        "width": string;
    }
    interface MyComponent {
        /**
          * The text color
         */
        "color": string;
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyInput {
        "bordered": boolean;
        "defaultValue": string;
        "disabled": boolean;
        "pattern": string;
        "placeholder": string;
        "size": string;
    }
    interface TooltipComponent {
        /**
          * Background color
         */
        "backgroundColor": string;
        /**
          * Text color
         */
        "color": string;
        /**
          * Font size
         */
        "fontSize": string;
        /**
          * Position of tooltip. left, right, top, bottom
         */
        "position": string;
        /**
          * Text to be displayed in the tooltip
         */
        "text": string;
    }
}
declare global {
    interface HTMLAlertComponentElement extends Components.AlertComponent, HTMLStencilElement {
    }
    var HTMLAlertComponentElement: {
        prototype: HTMLAlertComponentElement;
        new (): HTMLAlertComponentElement;
    };
    interface HTMLAvatarComponentElement extends Components.AvatarComponent, HTMLStencilElement {
    }
    var HTMLAvatarComponentElement: {
        prototype: HTMLAvatarComponentElement;
        new (): HTMLAvatarComponentElement;
    };
    interface HTMLGoogleTagManagerElement extends Components.GoogleTagManager, HTMLStencilElement {
    }
    var HTMLGoogleTagManagerElement: {
        prototype: HTMLGoogleTagManagerElement;
        new (): HTMLGoogleTagManagerElement;
    };
    interface HTMLImageComponentElement extends Components.ImageComponent, HTMLStencilElement {
    }
    var HTMLImageComponentElement: {
        prototype: HTMLImageComponentElement;
        new (): HTMLImageComponentElement;
    };
    interface HTMLModalWindowElement extends Components.ModalWindow, HTMLStencilElement {
    }
    var HTMLModalWindowElement: {
        prototype: HTMLModalWindowElement;
        new (): HTMLModalWindowElement;
    };
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {
    }
    var HTMLMyInputElement: {
        prototype: HTMLMyInputElement;
        new (): HTMLMyInputElement;
    };
    interface HTMLTooltipComponentElement extends Components.TooltipComponent, HTMLStencilElement {
    }
    var HTMLTooltipComponentElement: {
        prototype: HTMLTooltipComponentElement;
        new (): HTMLTooltipComponentElement;
    };
    interface HTMLElementTagNameMap {
        "alert-component": HTMLAlertComponentElement;
        "avatar-component": HTMLAvatarComponentElement;
        "google-tag-manager": HTMLGoogleTagManagerElement;
        "image-component": HTMLImageComponentElement;
        "modal-window": HTMLModalWindowElement;
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
        "my-input": HTMLMyInputElement;
        "tooltip-component": HTMLTooltipComponentElement;
    }
}
declare namespace LocalJSX {
    interface AlertComponent {
        "action"?: string;
        "icon"?: string;
        "text"?: string;
        "variant"?: string;
        "width"?: string;
    }
    interface AvatarComponent {
        /**
          * Alternate text when src image breaks
          * @type {string}
          * @memberof AvatarComponent
         */
        "alt"?: string;
        /**
          * Custom class for the image
          * @type {string}
          * @memberof AvatarComponent
         */
        "className"?: string;
        /**
          * Avatar image size
          * @type {('small' | 'medium' | 'large')}
          * @memberof AvatarComponent
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * Image source url
          * @type {string}
          * @memberof AvatarComponent
         */
        "src"?: string;
        /**
          * Show title of the image on hover
          * @type {string}
          * @memberof AvatarComponent
         */
        "title"?: string;
        /**
          * Avatar image shape variants
          * @type {('circular' | 'rounded' | 'square')}
          * @memberof AvatarComponent
         */
        "variant"?: 'circular' | 'rounded' | 'square';
    }
    interface GoogleTagManager {
        /**
          * The google tag manage container ID
         */
        "containerId"?: string;
    }
    interface ImageComponent {
        "srcImg"?: string;
        "srcImgName"?: string;
        "srcNextGen"?: string;
    }
    interface ModalWindow {
        "cancelText"?: string;
        "confirmText"?: string;
        "pointerEvents"?: boolean;
        "title"?: string;
    }
    interface MyButton {
        "color"?: string;
        "icon"?: string;
        "name"?: string;
        "type"?: string;
        "typeButtton"?: string;
        "width"?: string;
    }
    interface MyComponent {
        /**
          * The text color
         */
        "color"?: string;
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyInput {
        "bordered"?: boolean;
        "defaultValue"?: string;
        "disabled"?: boolean;
        "pattern"?: string;
        "placeholder"?: string;
        "size"?: string;
    }
    interface TooltipComponent {
        /**
          * Background color
         */
        "backgroundColor"?: string;
        /**
          * Text color
         */
        "color"?: string;
        /**
          * Font size
         */
        "fontSize"?: string;
        /**
          * Position of tooltip. left, right, top, bottom
         */
        "position"?: string;
        /**
          * Text to be displayed in the tooltip
         */
        "text"?: string;
    }
    interface IntrinsicElements {
        "alert-component": AlertComponent;
        "avatar-component": AvatarComponent;
        "google-tag-manager": GoogleTagManager;
        "image-component": ImageComponent;
        "modal-window": ModalWindow;
        "my-button": MyButton;
        "my-component": MyComponent;
        "my-input": MyInput;
        "tooltip-component": TooltipComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "alert-component": LocalJSX.AlertComponent & JSXBase.HTMLAttributes<HTMLAlertComponentElement>;
            "avatar-component": LocalJSX.AvatarComponent & JSXBase.HTMLAttributes<HTMLAvatarComponentElement>;
            "google-tag-manager": LocalJSX.GoogleTagManager & JSXBase.HTMLAttributes<HTMLGoogleTagManagerElement>;
            "image-component": LocalJSX.ImageComponent & JSXBase.HTMLAttributes<HTMLImageComponentElement>;
            "modal-window": LocalJSX.ModalWindow & JSXBase.HTMLAttributes<HTMLModalWindowElement>;
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-input": LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
            "tooltip-component": LocalJSX.TooltipComponent & JSXBase.HTMLAttributes<HTMLTooltipComponentElement>;
        }
=======
  interface AvatarComponent {
    /**
     * Alternate text when src image breaks
     * @type {string}
     * @memberof AvatarComponent
     */
    alt: string;
    /**
     * Custom class for the image
     * @type {string}
     * @memberof AvatarComponent
     */
    className: string;
    /**
     * Avatar image size
     * @type {('small' | 'medium' | 'large')}
     * @memberof AvatarComponent
     */
    size: 'small' | 'medium' | 'large';
    /**
     * Image source url
     * @type {string}
     * @memberof AvatarComponent
     */
    src: string;
    /**
     * Show title of the image on hover
     * @type {string}
     * @memberof AvatarComponent
     */
    title: string;
    /**
     * Avatar image shape variants
     * @type {('circular' | 'rounded' | 'square')}
     * @memberof AvatarComponent
     */
    variant: 'circular' | 'rounded' | 'square';
  }
  interface CheckmarkComponent {
    /**
     * Un-checked state emoji code
     */
    checkFalse: string;
    /**
     * Checked state emoji code
     */
    checkTrue: string;
    /**
     * Checkbox state
     */
    checked: boolean;
  }
  interface EmojiCheckboxComponent {
    /**
     * The initial state of checkbox
     */
    checked: boolean;
    /**
     * Checkbox name
     */
    name: string;
  }
  interface GoogleTagManager {
    /**
     * The google tag manage container ID
     */
    containerId: string;
  }
  interface ImageComponent {
    srcImg: string;
    srcImgName: string;
    srcNextGen: string;
  }
  interface LabelComponent {
    /**
     * Checkbox state
     */
    checked: boolean;
  }
  interface ModalWindow {
    cancelText: string;
    confirmText: string;
    pointerEvents: boolean;
    title: string;
  }
  interface MyButton {
    color: string;
    icon: string;
    name: string;
    type: string;
    typeButtton: string;
    width: string;
  }
  interface MyComponent {
    /**
     * The text color
     */
    color: string;
    /**
     * The first name
     */
    first: string;
    /**
     * The last name
     */
    last: string;
    /**
     * The middle name
     */
    middle: string;
  }
  interface MyInput {
    bordered: boolean;
    defaultValue: string;
    disabled: boolean;
    pattern: string;
    placeholder: string;
    size: string;
  }
  interface TooltipComponent {
    /**
     * Background color
     */
    backgroundColor: string;
    /**
     * Text color
     */
    color: string;
    /**
     * Font size
     */
    fontSize: string;
    /**
     * Position of tooltip. left, right, top, bottom
     */
    position: string;
    /**
     * Text to be displayed in the tooltip
     */
    text: string;
  }
}
declare global {
  interface HTMLAvatarComponentElement extends Components.AvatarComponent, HTMLStencilElement {}
  var HTMLAvatarComponentElement: {
    prototype: HTMLAvatarComponentElement;
    new (): HTMLAvatarComponentElement;
  };
  interface HTMLCheckmarkComponentElement extends Components.CheckmarkComponent, HTMLStencilElement {}
  var HTMLCheckmarkComponentElement: {
    prototype: HTMLCheckmarkComponentElement;
    new (): HTMLCheckmarkComponentElement;
  };
  interface HTMLEmojiCheckboxComponentElement extends Components.EmojiCheckboxComponent, HTMLStencilElement {}
  var HTMLEmojiCheckboxComponentElement: {
    prototype: HTMLEmojiCheckboxComponentElement;
    new (): HTMLEmojiCheckboxComponentElement;
  };
  interface HTMLGoogleTagManagerElement extends Components.GoogleTagManager, HTMLStencilElement {}
  var HTMLGoogleTagManagerElement: {
    prototype: HTMLGoogleTagManagerElement;
    new (): HTMLGoogleTagManagerElement;
  };
  interface HTMLImageComponentElement extends Components.ImageComponent, HTMLStencilElement {}
  var HTMLImageComponentElement: {
    prototype: HTMLImageComponentElement;
    new (): HTMLImageComponentElement;
  };
  interface HTMLLabelComponentElement extends Components.LabelComponent, HTMLStencilElement {}
  var HTMLLabelComponentElement: {
    prototype: HTMLLabelComponentElement;
    new (): HTMLLabelComponentElement;
  };
  interface HTMLModalWindowElement extends Components.ModalWindow, HTMLStencilElement {}
  var HTMLModalWindowElement: {
    prototype: HTMLModalWindowElement;
    new (): HTMLModalWindowElement;
  };
  interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {}
  var HTMLMyButtonElement: {
    prototype: HTMLMyButtonElement;
    new (): HTMLMyButtonElement;
  };
  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {}
  var HTMLMyInputElement: {
    prototype: HTMLMyInputElement;
    new (): HTMLMyInputElement;
  };
  interface HTMLTooltipComponentElement extends Components.TooltipComponent, HTMLStencilElement {}
  var HTMLTooltipComponentElement: {
    prototype: HTMLTooltipComponentElement;
    new (): HTMLTooltipComponentElement;
  };
  interface HTMLElementTagNameMap {
    'avatar-component': HTMLAvatarComponentElement;
    'checkmark-component': HTMLCheckmarkComponentElement;
    'emoji-checkbox-component': HTMLEmojiCheckboxComponentElement;
    'google-tag-manager': HTMLGoogleTagManagerElement;
    'image-component': HTMLImageComponentElement;
    'label-component': HTMLLabelComponentElement;
    'modal-window': HTMLModalWindowElement;
    'my-button': HTMLMyButtonElement;
    'my-component': HTMLMyComponentElement;
    'my-input': HTMLMyInputElement;
    'tooltip-component': HTMLTooltipComponentElement;
  }
}
declare namespace LocalJSX {
  interface AvatarComponent {
    /**
     * Alternate text when src image breaks
     * @type {string}
     * @memberof AvatarComponent
     */
    alt?: string;
    /**
     * Custom class for the image
     * @type {string}
     * @memberof AvatarComponent
     */
    className?: string;
    /**
     * Avatar image size
     * @type {('small' | 'medium' | 'large')}
     * @memberof AvatarComponent
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Image source url
     * @type {string}
     * @memberof AvatarComponent
     */
    src?: string;
    /**
     * Show title of the image on hover
     * @type {string}
     * @memberof AvatarComponent
     */
    title?: string;
    /**
     * Avatar image shape variants
     * @type {('circular' | 'rounded' | 'square')}
     * @memberof AvatarComponent
     */
    variant?: 'circular' | 'rounded' | 'square';
  }
  interface CheckmarkComponent {
    /**
     * Un-checked state emoji code
     */
    checkFalse?: string;
    /**
     * Checked state emoji code
     */
    checkTrue?: string;
    /**
     * Checkbox state
     */
    checked?: boolean;
  }
  interface EmojiCheckboxComponent {
    /**
     * The initial state of checkbox
     */
    checked?: boolean;
    /**
     * Checkbox name
     */
    name?: string;
  }
  interface GoogleTagManager {
    /**
     * The google tag manage container ID
     */
    containerId?: string;
  }
  interface ImageComponent {
    srcImg?: string;
    srcImgName?: string;
    srcNextGen?: string;
  }
  interface LabelComponent {
    /**
     * Checkbox state
     */
    checked?: boolean;
  }
  interface ModalWindow {
    cancelText?: string;
    confirmText?: string;
    pointerEvents?: boolean;
    title?: string;
  }
  interface MyButton {
    color?: string;
    icon?: string;
    name?: string;
    type?: string;
    typeButtton?: string;
    width?: string;
  }
  interface MyComponent {
    /**
     * The text color
     */
    color?: string;
    /**
     * The first name
     */
    first?: string;
    /**
     * The last name
     */
    last?: string;
    /**
     * The middle name
     */
    middle?: string;
  }
  interface MyInput {
    bordered?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    pattern?: string;
    placeholder?: string;
    size?: string;
  }
  interface TooltipComponent {
    /**
     * Background color
     */
    backgroundColor?: string;
    /**
     * Text color
     */
    color?: string;
    /**
     * Font size
     */
    fontSize?: string;
    /**
     * Position of tooltip. left, right, top, bottom
     */
    position?: string;
    /**
     * Text to be displayed in the tooltip
     */
    text?: string;
  }
  interface IntrinsicElements {
    'avatar-component': AvatarComponent;
    'checkmark-component': CheckmarkComponent;
    'emoji-checkbox-component': EmojiCheckboxComponent;
    'google-tag-manager': GoogleTagManager;
    'image-component': ImageComponent;
    'label-component': LabelComponent;
    'modal-window': ModalWindow;
    'my-button': MyButton;
    'my-component': MyComponent;
    'my-input': MyInput;
    'tooltip-component': TooltipComponent;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'avatar-component': LocalJSX.AvatarComponent & JSXBase.HTMLAttributes<HTMLAvatarComponentElement>;
      'checkmark-component': LocalJSX.CheckmarkComponent & JSXBase.HTMLAttributes<HTMLCheckmarkComponentElement>;
      'emoji-checkbox-component': LocalJSX.EmojiCheckboxComponent & JSXBase.HTMLAttributes<HTMLEmojiCheckboxComponentElement>;
      'google-tag-manager': LocalJSX.GoogleTagManager & JSXBase.HTMLAttributes<HTMLGoogleTagManagerElement>;
      'image-component': LocalJSX.ImageComponent & JSXBase.HTMLAttributes<HTMLImageComponentElement>;
      'label-component': LocalJSX.LabelComponent & JSXBase.HTMLAttributes<HTMLLabelComponentElement>;
      'modal-window': LocalJSX.ModalWindow & JSXBase.HTMLAttributes<HTMLModalWindowElement>;
      'my-button': LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'my-input': LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
      'tooltip-component': LocalJSX.TooltipComponent & JSXBase.HTMLAttributes<HTMLTooltipComponentElement>;
    }
}
