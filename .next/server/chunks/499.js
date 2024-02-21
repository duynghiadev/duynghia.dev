exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 1388:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 2990:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 701, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8809));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9657))

/***/ }),

/***/ 5810:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6221))

/***/ }),

/***/ 9507:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5849))

/***/ }),

/***/ 7022:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4446))

/***/ }),

/***/ 6221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _footer_default)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/components/container/index.tsx
var container = __webpack_require__(7036);
// EXTERNAL MODULE: ./src/components/motions/smoother.tsx + 4 modules
var smoother = __webpack_require__(9657);
// EXTERNAL MODULE: ./src/components/buttons/button.tsx
var buttons_button = __webpack_require__(1538);
// EXTERNAL MODULE: ./src/components/reference-socials-group.tsx
var reference_socials_group = __webpack_require__(6876);
// EXTERNAL MODULE: ./src/components/texts/text-description.tsx
var text_description = __webpack_require__(2413);
// EXTERNAL MODULE: ./src/components/texts/text-main.tsx
var text_main = __webpack_require__(4402);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4660);
;// CONCATENATED MODULE: ./src/app/(site)/_components/contact-section.tsx






const ContactSection = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-8 text-lg font-semibold uppercase",
                children: "Contact"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(text_main/* default */.Z, {
                className: "mb-4 !font-normal !leading-tight",
                children: "Let’s Make Something Great Together."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(text_main/* default */.Z, {
                className: "mb-4 font-normal !leading-tight",
                children: "Start a conversation."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(text_description/* default */.Z, {
                className: "text-gray-800 dark:text-gray-200 mb-12",
                children: [
                    "Get in touch if you want to discuss your project, ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "learn more about my methodologies, or just to say hello!"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(buttons_button/* default */.Z, {
                rounded: "base",
                color: "base",
                className: "min-w-[170px] mb-8",
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    target: "_blank",
                    href: "mailto:duynghia22302@gmail.com",
                    children: [
                        "Get in touch ",
                        /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ArrowRight */.olP, {
                            className: "w-4 h-4 ml-2"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(reference_socials_group/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const contact_section = (ContactSection);

;// CONCATENATED MODULE: ./src/app/(site)/_components/footer-section.tsx

const FooterSection = ({ className })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-center text-gray-900 dark:text-gray-100",
        children: "Copyright \xa9 2024 Duy Nghia Dev."
    });
};
/* harmony default export */ const footer_section = (FooterSection);

;// CONCATENATED MODULE: ./src/app/(site)/@footer/default.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const DetailedFooterLayout = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(smoother["default"].ScrollSection, {
                className: "py-32",
                children: /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(contact_section, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(smoother["default"].ScrollSection, {
                className: "py-12 border-t border-gray-300 dark:border-gray-800 flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(footer_section, {})
            })
        ]
    });
};
/* harmony default export */ const _footer_default = (DetailedFooterLayout);


/***/ }),

/***/ 5849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _header_default)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/components/motions/smoother.tsx + 4 modules
var smoother = __webpack_require__(9657);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(4889);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./src/components/container/index.tsx
var container = __webpack_require__(7036);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs + 2 modules
var dist = __webpack_require__(2258);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4660);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var next_themes_dist = __webpack_require__(5176);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(7640);
;// CONCATENATED MODULE: ./src/app/(site)/_components/toggle-mode.tsx




const ToggleTheme = ()=>{
    const { theme, setTheme } = (0,next_themes_dist/* useTheme */.F)();
    const switchModes = (0,react_experimental_.useMemo)(()=>({
            dark: "light",
            light: "dark"
        }), []);
    const handleToggleMode = ()=>setTheme(switchModes?.[theme] || "dark");
    const ModeIcon = theme === "dark" ? lucide_react/* Moon */.JFe : lucide_react/* Sun */.kOA;
    return /*#__PURE__*/ jsx_runtime_.jsx(ModeIcon, {
        className: "w-4 h-4 cursor-pointer",
        onClick: handleToggleMode
    });
};

;// CONCATENATED MODULE: ./src/app/(site)/_components/header-section.tsx






const HeaderNavItem = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(dist/* Slot */.g7, {
        ...props,
        className: "font-medium dark:text-gray-50 uppercase text-sm"
    });
};
const HeaderSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
        className: "relative flex gap-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font-bold tracking-widest text-2xl whitespace-nowrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: "Duy Nghia."
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ml-auto flex items-center gap-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderNavItem, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/about-me",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "hidden md:inline-block",
                                    children: "About me"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Info */.kIV, {
                                    className: "inline-block md:hidden w-5 h-5"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderNavItem, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/projects",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "hidden md:inline-block",
                                    children: "Projects"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Presentation */.ApO, {
                                    className: "inline-block md:hidden w-5 h-5"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderNavItem, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            target: "_blank",
                            href: "/LeNguyenDuyNghia%20-%20Software%20Engineer.pdf",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "hidden md:inline-block",
                                    children: "Resume"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Box */.xuv, {
                                    className: "inline-block md:hidden w-5 h-5"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ToggleTheme, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const header_section = (HeaderSection);

;// CONCATENATED MODULE: ./src/app/(site)/@header/default.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const DetailedHeaderLayout = ()=>{
    const pathname = (0,navigation.usePathname)();
    const isDetailedProjectPath = /\/projects\/*./g.test(pathname);
    return /*#__PURE__*/ jsx_runtime_.jsx(smoother["default"].ScrollSection, {
        className: clsx_default()("h-[72px] flex items-center", {
            "bg-gray-100 dark:bg-[#0045fa]": isDetailedProjectPath
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx(header_section, {})
    });
};
/* harmony default export */ const _header_default = (DetailedHeaderLayout);


/***/ }),

/***/ 1538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2258);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7247);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);




const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__/* .cva */ .j)(clsx__WEBPACK_IMPORTED_MODULE_2___default()("inline-flex items-center justify-center", "text-sm font-medium h-[50px] min-w-[100px] px-3 py-5"), {
    variants: {
        rounded: {
            base: [
                "rounded-3xl"
            ]
        },
        color: {
            base: [
                "bg-gray-950 text-gray-50 dark:bg-white dark:text-gray-950"
            ]
        }
    },
    defaultVariants: {
        rounded: "base",
        color: "base"
    }
});
const Button = ({ asChild, className, rounded, color, ...props })=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        ...props,
        className: buttonVariants({
            className,
            color,
            rounded
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 7036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export containerVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7247);


const containerVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__/* .cva */ .j)("w-full px-6", {
    variants: {
        variant: {
            base: "max-w-[1140px] mx-auto"
        }
    },
    defaultVariants: {
        variant: "base"
    }
});
const Container = ({ className, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...props,
        className: containerVariants({
            className
        }),
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 9657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ smoother)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(4236);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(7640);
// EXTERNAL MODULE: ./node_modules/react-use/lib/index.js
var lib = __webpack_require__(7402);
;// CONCATENATED MODULE: ./src/hooks/use-device.ts
/* __next_internal_client_entry_do_not_use__ default auto */ 


function useDevice() {
    const [device, setDevice] = (0,react_experimental_.useState)("desktop");
    const [screenSize, setScreenSize] = (0,react_experimental_.useState)(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleManifestDevice = debounce_default()(()=>{
        let result = "";
        if (window.innerWidth > 768) {
            result = "desktop";
        }
        if (window.innerWidth > 525 && window.innerWidth <= 768) {
            result = "tablet";
        }
        if (window.innerWidth <= 525) {
            result = "mobile";
        }
        setScreenSize(window.innerWidth);
        setDevice(result);
    }, 200);
    (0,react_experimental_.useEffect)(()=>{
        handleManifestDevice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,lib.useEvent)("resize", handleManifestDevice);
    return {
        device,
        screenSize
    };
}
/* harmony default export */ const use_device = (useDevice);

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs + 2 modules
var dist = __webpack_require__(2258);
// EXTERNAL MODULE: ./node_modules/gsap/dist/gsap.js
var gsap = __webpack_require__(2913);
// EXTERNAL MODULE: ./node_modules/gsap/dist/ScrollTrigger.js
var ScrollTrigger = __webpack_require__(2124);
// EXTERNAL MODULE: ./node_modules/locomotive-scroll/dist/locomotive-scroll.js
var locomotive_scroll = __webpack_require__(27);
var locomotive_scroll_default = /*#__PURE__*/__webpack_require__.n(locomotive_scroll);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(5089);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(4889);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./src/components/rotate-personal/index.tsx
var rotate_personal = __webpack_require__(4924);
;// CONCATENATED MODULE: ./src/components/loadings/init-page-splash.tsx



const InitPageSplash = ({ active })=>{
    const activeClass = active ? "opacity-1" : "opacity-0 -z-[999] transition-all duration-300 ease-linear";
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: clsx_default()("text-foreground bg-background fixed top-0 left-0 w-full h-screen pointer-events-none", "grid place-items-center", "z-[999]", activeClass),
        children: /*#__PURE__*/ jsx_runtime_.jsx(rotate_personal/* default */.Z, {
            className: "animate-spin-slow",
            enableLogo: true
        })
    });
};
/* harmony default export */ const init_page_splash = (InitPageSplash);

;// CONCATENATED MODULE: ./src/components/motions/constant.ts
const DEFINE_LOCOMOTIVE_LERP = {
    desktop: 0.1,
    tablet: 0.2,
    mobile: 0.2
};

;// CONCATENATED MODULE: ./src/components/motions/smoother-scroll-section.tsx




const SmootherScrollSection = /*#__PURE__*/ (0,react_experimental_.forwardRef)(({ children, sectionInnerProps, asChild, asStackedScroll, asHorizontalScroll, enableSectionInner = true, ...props }, ref)=>{
    const Comp = asChild ? dist/* Slot */.g7 : "div";
    const CompSectionInner = enableSectionInner ? "div" : react_experimental_.Fragment;
    return /*#__PURE__*/ jsx_runtime_.jsx(Comp, {
        ...props,
        ref: ref,
        className: clsx_default()(props.className, "smoother-scroll-section", {
            "!max-h-fit": asHorizontalScroll
        }),
        "data-scroll-horizontal": asHorizontalScroll ? "true" : undefined,
        "data-scroll-stacked": asStackedScroll ? "true" : undefined,
        "data-scroll-section": true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(CompSectionInner, {
            ...enableSectionInner ? {
                className: clsx_default()(sectionInnerProps?.className, "section-inner w-full max-h-fit")
            } : {},
            children: /*#__PURE__*/ (0,react_experimental_.cloneElement)(children, {
                "data-scroll-in-section": asHorizontalScroll || asStackedScroll,
                className: clsx_default()(children.props.className, "w-full h-full")
            })
        })
    });
});
SmootherScrollSection.displayName = "SmootherScrollSection";
/* harmony default export */ const smoother_scroll_section = (SmootherScrollSection);

;// CONCATENATED MODULE: ./src/components/motions/smoother.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












gsap.gsap.registerPlugin(ScrollTrigger.ScrollTrigger);
const Smoother = ({ asChild, options, children })=>{
    const pathname = (0,navigation.usePathname)();
    const { device } = use_device();
    const containerRef = (0,react_experimental_.useRef)(null);
    const Comp = asChild ? dist/* Slot */.g7 : "div";
    const [isReadyForScroll, setIsReadyForScroll] = (0,react_experimental_.useState)(false);
    const handleLocomotiveScroll = (0,react_experimental_.useCallback)(($el)=>{
        if ($el) {
            const lerp = DEFINE_LOCOMOTIVE_LERP[device];
            return new (locomotive_scroll_default())({
                lerp,
                smooth: true,
                ...options,
                smartphone: {
                    smooth: true
                },
                tablet: {
                    breakpoint: 768.5,
                    smooth: true
                },
                resetNativeScroll: true,
                el: $el
            });
        }
        return null;
    }, [
        JSON.stringify(options),
        device
    ]);
    const handleWaitingLocoScrollIsReady = (_locoScroll)=>{
        _locoScroll.on("scroll", (0,lodash.debounce)(()=>{
            setIsReadyForScroll(true);
        }, 200));
    };
    (0,react_experimental_.useLayoutEffect)(()=>{
        if (containerRef.current) {
            setIsReadyForScroll(false);
            const containerEl = containerRef.current;
            // Handle create instance locomotive scrolling
            const locoScroll = handleLocomotiveScroll(containerEl);
            if (locoScroll) {
                handleWaitingLocoScrollIsReady(locoScroll);
                // Trigger gsap scroll trigger updating by scroll event of loco scroll
                locoScroll.on("scroll", ScrollTrigger.ScrollTrigger.update);
                // Add proxy for container element
                const scrollPinType = containerEl.style.transform ? "transform" : "fixed";
                ScrollTrigger.ScrollTrigger.scrollerProxy(containerEl, {
                    scrollTop (value) {
                        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll?.instance.scroll.y;
                    },
                    getBoundingClientRect () {
                        return {
                            top: 0,
                            left: 0,
                            width: window.innerWidth,
                            height: window.innerHeight
                        };
                    },
                    pinType: scrollPinType
                });
                const sections = document.querySelectorAll(".smoother-scroll-section");
                sections.forEach((section)=>{
                    const inner = section.querySelector(".section-inner");
                    if (section.hasAttribute("data-scroll-horizontal")) {
                        const scrollInSectionEl = section.querySelector("[data-scroll-in-section]");
                        ScrollTrigger.ScrollTrigger.create({
                            scroller: containerEl,
                            trigger: section,
                            start: "center center",
                            end: ()=>`+=${section.scrollWidth + window.innerHeight}`,
                            pin: inner,
                            pinSpacing: true,
                            anticipatePin: 1,
                            pinType: "transform"
                        });
                        gsap.gsap.to(scrollInSectionEl, {
                            x: ()=>{
                                return `${-(section.scrollWidth - document.documentElement.clientWidth)}px`;
                            },
                            ease: "none",
                            scrollTrigger: {
                                trigger: scrollInSectionEl,
                                scroller: containerEl,
                                start: "center center",
                                end: ()=>`+=${section.scrollWidth + 800}`,
                                scrub: true
                            }
                        });
                    }
                    if (section.hasAttribute("data-scroll-stacked")) {
                    // Do not working on here
                    }
                    // Each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
                    ScrollTrigger.ScrollTrigger.addEventListener("refresh", ()=>{
                        locoScroll.update();
                    });
                    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
                    ScrollTrigger.ScrollTrigger.refresh();
                });
            }
            return ()=>{
                locoScroll?.destroy();
            };
        }
    }, [
        pathname,
        containerRef,
        handleLocomotiveScroll
    ]);
    (0,lib.useDebounce)(()=>{
        ScrollTrigger.ScrollTrigger.refresh();
    }, 300, [
        pathname,
        device
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Comp, {
                ref: containerRef,
                "data-scroll-container": true,
                style: {
                    perspective: "1px"
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(init_page_splash, {
                active: !isReadyForScroll
            })
        ]
    });
};
Smoother.ScrollSection = smoother_scroll_section;
/* harmony default export */ const smoother = (Smoother);


/***/ }),

/***/ 4446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5176);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const NextThemeProvider = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .f, {
        attribute: "class",
        enableSystem: true,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextThemeProvider);


/***/ }),

/***/ 8809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5006);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4660);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7402);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Pursuer = ()=>{
    (0,react_use__WEBPACK_IMPORTED_MODULE_3__.useEvent)("mousemove", lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()((event)=>{
        const el = event.target;
        const elNodeName = el.nodeName;
        const primitiveNodes = {
            BUTTON: true,
            A: true
        };
        const isMatchedPrimitiveNode = primitiveNodes?.[elNodeName];
        const [pursuerX, pursuerY] = [
            event.clientX,
            event.clientY
        ];
        const circleRadius = 32 / 2;
        document.documentElement.style.setProperty("--pursuer-x", `${pursuerX - circleRadius}px`);
        document.documentElement.style.setProperty("--pursuer-y", `${pursuerY - circleRadius}px`);
        document.documentElement.style.setProperty("--pursuer-scale", isMatchedPrimitiveNode ? "10" : "1");
    }, 1));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("w-8 h-8 rounded-full border border-gray-50/20 z-10 absolute top-0 left-0 transition-transform duration-300 ease-out pointer-events-none", "hidden md:flex items-center justify-center"),
        style: {
            mixBlendMode: "difference",
            transform: "translateX(var(--pursuer-x)) translateY(var(--pursuer-y)) translateZ(0)"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative w-2 h-2 rounded-full bg-white dark:bg-white transition duration-300 ease-out",
            style: {
                transform: "scale(var(--pursuer-scale))",
                transformOrigin: "center center"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-[2px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .ArrowRight */ .olP, {
                    className: "w-[4px] h-[4px]"
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pursuer);


/***/ }),

/***/ 6876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4660);


const ReferenceSocialsGroup = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap items-center gap-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                target: "_blank",
                href: "https://www.linkedin.com/in/duynghiale/",
                className: "inline-flex items-center gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .ArrowUpRight */ .Gux, {
                        className: "w-4 h-4"
                    }),
                    "Linked In"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                target: "_blank",
                href: "https://twitter.com/nghia_dian",
                className: "inline-flex items-center gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .ArrowUpRight */ .Gux, {
                        className: "w-4 h-4"
                    }),
                    "Twitter"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                target: "_blank",
                href: "https://github.com/duynghiadev/",
                className: "inline-flex items-center gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .ArrowUpRight */ .Gux, {
                        className: "w-4 h-4"
                    }),
                    "Github"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                target: "_blank",
                href: "https://codepen.io/DuyNghia123",
                className: "inline-flex items-center gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_1__/* .ArrowUpRight */ .Gux, {
                        className: "w-4 h-4"
                    }),
                    "Codepen"
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReferenceSocialsGroup);


/***/ }),

/***/ 4924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7402);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @next/next/no-img-element */ 



const RotatePersonal = ({ enableLogo, ...props })=>{
    const point = (0,react_use__WEBPACK_IMPORTED_MODULE_3__.useWindowSize)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...props,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(props.className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full h-full relative",
            children: [
                !enableLogo ? // <img
                //   width={170}
                //   height={170}
                //   className="rounded-full max-w-[170px] max-h-[170px] object-cover"
                //   src="https://res.cloudinary.com/xskill/image/upload/v1686988257/meee/IMG_1101_2_csddw0.png"
                //   alt="Personal"
                // />
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    width: 170,
                    height: 170,
                    className: "rounded-full max-w-[100px] md:max-w-[170px] max-h-[100px] md:max-h-[170px] object-cover",
                    src: "/avatar-small.jpg",
                    alt: "Personal"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("w-[100px] md:w-[170px] h-[100px] md:h-[170px] rounded-full bg-background", "flex items-center justify-center text-3xl font-bold"),
                    children: "T"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    width: "280",
                    height: "280",
                    className: "absolute w-[180px] md:w-[280px] h-[180px] md:h-[280px] -top-[40px] md:-top-[56px] -left-[40px] md:-left-[56px] rotate-90",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                id: "circle",
                                d: "   M 50, 50   m -37, 0   a 37,37 0 1,1 74,0   a 37,37 0 1,1 -74,0"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                            fontSize: "11.5",
                            className: "text-gray-950 dark:fill-gray-50",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textPath", {
                                xlinkHref: "#circle",
                                children: "- Le Nguyen Duy Nghia - Front-end Developer"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RotatePersonal);


/***/ }),

/***/ 2413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2258);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7247);



const textDescriptionVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__/* .cva */ .j)("text-xl font-normal leading-normal", {
    variants: {},
    defaultVariants: {}
});
const TextDescription = ({ children, className, asChild, ...props })=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__/* .Slot */ .g7 : "p";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        ...props,
        className: textDescriptionVariants({
            className
        }),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextDescription);


/***/ }),

/***/ 5491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2258);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7247);



const textLegendVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__/* .cva */ .j)("text-lg font-semibold uppercase", {
    variants: {},
    defaultVariants: {}
});
const TextLegend = ({ children, className, asChild, ...props })=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__/* .Slot */ .g7 : "p";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        ...props,
        className: textLegendVariants({
            className
        }),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextLegend);


/***/ }),

/***/ 4402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2258);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7247);



const textMainVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__/* .cva */ .j)("text-[3.5rem] font-bold leading-normal	", {
    variants: {},
    defaultVariants: {}
});
const TextMain = ({ children, className, asChild, ...props })=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__/* .Slot */ .g7 : "p";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        ...props,
        className: textMainVariants({
            className
        }),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextMain);


/***/ }),

/***/ 2401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R0: () => (/* binding */ PAGE_CONTENT_PROJECTS),
/* harmony export */   aT: () => (/* binding */ PAGE_CONTENT_HOME),
/* harmony export */   xw: () => (/* binding */ PAGE_CONTENT_ABOUT_ME)
/* harmony export */ });
const PAGE_CONTENT_ABOUT_ME = {
    WORKS_EXPERIENCE: [
        {
            id: "examination",
            name: "Website to schedule medical examination – Frontend Developer",
            date: "Sep 2022 - Jan 2023",
            position: "Front-end Developer",
            description: `
      With our appointment booking page, you can easily and quickly book an appointment. Simply visit our website and select the doctor or clinic closest to you, then choose the time and date that work best for you. And contributing to projects using ReactJS, NodeJS, SCSS, Vercel.
      `
        },
        {
            id: "Spotify-Clone",
            name: "Spotify Clone",
            date: "July 2022 - Aug 2022",
            position: "Front-end Developer",
            description: `
      A front-end clone project of the Spotify Web Player, and contributing to projects using CSS, React.js, Github Page.
      `
        },
        {
            id: "app-chat-funny",
            name: "App Chat Funny",
            date: "March 2022 - May 2022",
            position: "Front-end Developer",
            description: `
      I coordinate software deployments,
      collaborate with team members to plan
      and develop project features and user interfaces, adjust design parameters, work with designers on product interfaces, deploy client projects using Filezilla, and design feature interfaces and APIs using React.js and contributing to projects using ReactJS, CSS, Firebase
      `
        },
        {
            id: "laptop-shop",
            name: "LapTop Shop Java Spring Boot – Final project of the Java web course",
            date: "Nov 2021 - Jan 2022",
            position: "Front-end Developer",
            description: `
      This is a final project of the Java web course. This project I worked on as a team. My group has 3 members. My position Design & code user interface components and add, remove, and
      edit product functions. Contributing to projects using Java, Spring Boot, JSP-Servlet
      `
        }
    ]
};
const PAGE_CONTENT_PROJECTS = {
    PROJECTS: [
        {
            id: "shoppe-clone",
            slug: "casio-anhkhue-com",
            detailedName: "Shoppe Clone",
            title: "Shoppe Clone",
            referenceSiteUrl: "https://shopee-clone-reactjs.vercel.app/",
            description: "The store sales the phone the watches",
            image: "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508848/image%20for%20cv/n7t9vtbkcxxfjwyzbnn5.png",
            theResult: "Improved speed and user experience compared to the previous version. Enhanced user experience",
            metadata: {
                services: [
                    "E-commerce"
                ],
                location: "Da Nang City",
                website: "https://shopee-clone-reactjs.vercel.app/",
                thumbnails: [
                    "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508847/image%20for%20cv/nobskcuwbas3dzpjpods.png",
                    "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508847/image%20for%20cv/zgoga1h43jfpt33ketes.png",
                    "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508848/image%20for%20cv/n7t9vtbkcxxfjwyzbnn5.png",
                    "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508848/image%20for%20cv/k4w7n3ejmjhj4dyec9yh.png"
                ]
            }
        }
    ]
};
const PAGE_CONTENT_HOME = {
    CODEPENS: [
        {
            href: "https://codepen.io/DuyNghia123/pen/rNRbbGe",
            src: "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508114/image%20for%20cv/vkkqbry3us5pwrmepali.png"
        },
        {
            href: "https://codepen.io/DuyNghia123/pen/dyrLLZZ",
            src: "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508115/image%20for%20cv/zbuesgk2j5tr9mcqp3sg.png"
        },
        {
            href: "https://codepen.io/DuyNghia123/pen/WNmWWzq",
            src: "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508114/image%20for%20cv/wancd5vq44gg1fc5thxv.png"
        },
        {
            href: "https://codepen.io/DuyNghia123/pen/poYBBKJ",
            src: "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508114/image%20for%20cv/aiyzndr9oyuy4kvpsih0.png"
        },
        {
            href: "https://codepen.io/DuyNghia123/pen/xxBeeJr",
            src: "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508114/image%20for%20cv/zlakjnf9grepqs1uwcvv.png"
        },
        {
            href: "https://codepen.io/DuyNghia123/pen/WNmWWae",
            src: "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508114/image%20for%20cv/rvm1lexms8z37umw7yfp.png"
        },
        {
            href: "https://codepen.io/DuyNghia123/pen/qBvwwJV",
            src: "https://res.cloudinary.com/dgilz3ksx/image/upload/v1708508114/image%20for%20cv/bzotccyhkocwl88wjddj.png"
        }
    ]
};


/***/ }),

/***/ 294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\DELL\Desktop\duynghia.dev\src\app\(site)\@footer\default.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\DELL\Desktop\duynghia.dev\src\app\(site)\@header\default.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/components/pursuer.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\DELL\Desktop\duynghia.dev\src\components\pursuer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const pursuer = (__default__);
// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(4769);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
;// CONCATENATED MODULE: ./src/app/(site)/layout.tsx



const Smoother = app_dynamic_default()(()=>__webpack_require__.e(/* import() */ 757).then(__webpack_require__.bind(__webpack_require__, 8757)), {
    loadableGenerated: {
        modules: [
            "C:\\Users\\DELL\\Desktop\\duynghia.dev\\src\\app\\(site)\\layout.tsx -> " + "@/components/motions/smoother"
        ]
    },
    ssr: false
});
const SiteLayout = ({ children, footer, header })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Smoother, {
                children: [
                    header,
                    children,
                    footer
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(pursuer, {})
        ]
    });
};
/* harmony default export */ const layout = (SiteLayout);


/***/ }),

/***/ 4776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(3331);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/components/next-theme-provider/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\DELL\Desktop\duynghia.dev\src\components\next-theme-provider\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const next_theme_provider = (__default__);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(8922);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/locomotive-scroll/dist/locomotive-scroll.css
var locomotive_scroll = __webpack_require__(7612);
// EXTERNAL MODULE: ./src/styles/globals.scss
var globals = __webpack_require__(9770);
;// CONCATENATED MODULE: ./src/app/layout.tsx






const metadata = {
    title: "Duy Nghia Dev",
    description: "Generated by Duy Nghia Dev",
    keywords: "Duy Nghia Dev | Personal Portfolio 2024"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: clsx_default()((target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className),
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_theme_provider, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 9770:
/***/ (() => {



/***/ })

};
;