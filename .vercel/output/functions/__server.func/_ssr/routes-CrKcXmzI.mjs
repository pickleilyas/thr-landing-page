import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CrKcXmzI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var logo_png_default = "/assets/logo%20png-DeLnkXCI.png";
var links = [
	{
		href: "#heritage",
		label: "Héritage"
	},
	{
		href: "#plat",
		label: "Le Plat"
	},
	{
		href: "#accompagnements",
		label: "Trio"
	},
	{
		href: "#the",
		label: "Thé"
	},
	{
		href: "#reserver",
		label: "Réserver"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 24);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-cream/85 backdrop-blur-md border-b border-ink/10" : "bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_png_default,
						alt: "Patritalent — Un saveur d'hier, talent d'aujourd'hui",
						className: "h-12 w-auto md:h-14",
						loading: "eager"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-xs uppercase tracking-[0.2em] text-ink/70 transition hover:text-ink",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#reserver",
					className: "serif group hidden items-center gap-2 border-b border-ink/40 pb-1 text-sm italic text-ink transition hover:border-saffron hover:text-saffron md:inline-flex",
					children: ["Réserver l'expérience", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "transition-transform group-hover:translate-x-1",
						children: "→"
					})]
				})
			]
		})
	});
}
var variants = {
	warm: "from-[oklch(0.82_0.09_70)] via-[oklch(0.65_0.12_45)] to-[oklch(0.4_0.08_30)]",
	ember: "from-[oklch(0.75_0.13_55)] via-[oklch(0.5_0.16_35)] to-[oklch(0.28_0.09_30)]",
	olive: "from-[oklch(0.7_0.06_110)] via-[oklch(0.5_0.06_100)] to-[oklch(0.3_0.04_90)]",
	saffron: "from-[oklch(0.88_0.1_85)] via-[oklch(0.7_0.14_65)] to-[oklch(0.45_0.12_45)]"
};
var ratios = {
	square: "aspect-square",
	portrait: "aspect-[3/4]",
	landscape: "aspect-[4/3]",
	wide: "aspect-[16/10]"
};
function PlateFrame({ label, caption, variant = "warm", className = "", ratio = "portrait", imageSrc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: `group relative overflow-hidden ${ratios[ratio]} ${className}`,
		style: { boxShadow: "var(--shadow-warm)" },
		children: [
			imageSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: imageSrc,
				alt: label,
				className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-br ${variants[variant]}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-30 mix-blend-overlay",
				style: {
					backgroundImage: "radial-gradient(oklch(0.2 0 0 / 0.4) 1px, transparent 1px)",
					backgroundSize: "3px 3px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,oklch(1_0_0/0.35),transparent_55%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-3 text-cream/85",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "56",
						height: "56",
						viewBox: "0 0 56 56",
						fill: "none",
						className: "opacity-70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M28 4 L52 28 L28 52 L4 28 Z M28 14 L42 28 L28 42 L14 28 Z",
							stroke: "currentColor",
							strokeWidth: "1",
							fill: "none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "28",
							cy: "28",
							r: "3",
							fill: "currentColor"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "serif text-2xl italic tracking-wide",
						children: "Diyafa"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "serif text-xs italic uppercase tracking-[0.25em] text-cream/80",
					children: label
				}), caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-[0.2em] text-cream/60",
					children: caption
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-5 top-5 h-px w-8 bg-cream/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-5 top-5 h-8 w-px bg-cream/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-5 top-5 h-px w-8 bg-cream/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-5 top-5 h-8 w-px bg-cream/60" })
		]
	});
}
var tablethr_default = "/assets/tablethr-CVvJmQJB.jpeg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl",
			style: { background: "var(--gradient-warm)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-end gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:px-10 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .8 },
					className: "kicker text-sm md:text-base",
					children: "— Célébrons l'Art de Recevoir à la Marocaine"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: 1,
						delay: .1
					},
					className: "serif mt-6 text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight",
					children: [
						"La Table de la",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-terracotta",
							children: "Diyafa"
						}),
						" Marocaine."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: 1,
						delay: .25
					},
					className: "mt-8 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg",
					children: [
						"Une réinterprétation contemporaine de l'hospitalité et de la gastronomie de la région ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "serif italic",
							children: "Casablanca-Settat"
						}),
						" — entre la générosité de la Chaouia et le raffinement des Doukkala."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: 1,
						delay: .4
					},
					className: "mt-12 flex flex-wrap items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#plat",
						className: "serif group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm uppercase tracking-[0.22em] text-cream transition hover:bg-terracotta",
						children: ["Découvrir le menu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "transition-transform group-hover:translate-x-1",
							children: "→"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#reserver",
						className: "serif inline-flex items-center gap-2 border-b border-ink/40 pb-1 italic text-ink transition hover:border-saffron hover:text-saffron",
						children: "Réserver l'expérience"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-ink/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Édition I" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-ink/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chaouia · Doukkala" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-px w-10 bg-ink/30 md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden md:inline",
							children: "Saison 2026"
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlateFrame, {
						label: "Épaule d'agneau dokkali",
						caption: "Pièce maîtresse",
						variant: "ember",
						ratio: "portrait",
						className: "ml-auto w-full max-w-md",
						imageSrc: tablethr_default
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-8 -bottom-8 hidden h-32 w-32 border border-ink/15 md:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-4 -top-4 hidden h-20 w-20 bg-saffron/20 md:block" })
				]
			})]
		})]
	});
}
function ZelligeDivider({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center justify-center gap-6 py-2 ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline w-full max-w-[160px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				width: "40",
				height: "40",
				viewBox: "0 0 40 40",
				fill: "none",
				className: "text-saffron",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 2 L26 14 L38 14 L28 22 L32 34 L20 27 L8 34 L12 22 L2 14 L14 14 Z",
					stroke: "currentColor",
					strokeWidth: "0.8",
					fill: "none",
					opacity: "0.7"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "20",
					cy: "20",
					r: "2",
					fill: "currentColor"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline w-full max-w-[160px]" })
		]
	});
}
function VideoSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 py-20 md:px-10 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "kicker text-xs uppercase tracking-[0.3em]",
						children: "Chapitre 02"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "serif mt-4 text-4xl md:text-5xl",
						children: [
							"L'Art de la ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-terracotta",
								children: "Diyafa"
							}),
							" en mouvement"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm text-ink/60",
						children: "Le geste, la fumée, la main qui dresse — quelques minutes pour ressentir l'âme d'une table marocaine."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZelligeDivider, { className: "mt-6" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: {
					duration: 1,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "relative mt-12 aspect-video w-full overflow-hidden border border-ink/15",
				style: { boxShadow: "var(--shadow-warm)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[oklch(0.25_0.04_50)] via-[oklch(0.18_0.03_40)] to-[oklch(0.12_0.02_30)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-25",
						style: {
							backgroundImage: "radial-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px)",
							backgroundSize: "4px 4px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.5_0.15_50/0.4),transparent_70%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Lire la vidéo",
						className: "group absolute inset-0 grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative grid h-24 w-24 place-items-center rounded-full border border-cream/40 backdrop-blur-sm transition group-hover:scale-110 group-hover:border-saffron",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full border border-cream/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "22",
								height: "26",
								viewBox: "0 0 22 26",
								fill: "currentColor",
								className: "ml-1 text-cream",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 0 L22 13 L0 26 Z" })
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-5 text-cream/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "serif text-xs italic uppercase tracking-[0.3em]",
							children: "Teaser — La table dressée"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.3em]",
							children: "00:00 / 02:14"
						})]
					})
				]
			})]
		})
	});
}
var pillars = [
	{
		title: "Agriculture",
		text: "Blés tendres, oliveraies et maraîchage des plaines de la Chaouia.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 32 32",
			fill: "none",
			className: "h-7 w-7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 4 V28 M16 10 C10 10 8 14 8 18 M16 10 C22 10 24 14 24 18 M16 16 C12 16 10 19 10 22 M16 16 C20 16 22 19 22 22",
				stroke: "currentColor",
				strokeWidth: "1.2",
				strokeLinecap: "round"
			})
		})
	},
	{
		title: "Agroalimentaire",
		text: "Smen beldi, huile d'olive première pression, conserves d'antan.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			fill: "none",
			className: "h-7 w-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 6 H20 V10 L22 12 V26 H10 V12 L12 10 Z",
				stroke: "currentColor",
				strokeWidth: "1.2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14 16 H18 M14 20 H18",
				stroke: "currentColor",
				strokeWidth: "1.2"
			})]
		})
	},
	{
		title: "Terroir",
		text: "Les Doukkala — mer, sel et fruits secs en héritage.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			fill: "none",
			className: "h-7 w-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "12",
				stroke: "currentColor",
				strokeWidth: "1.2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 20 C10 16 22 16 28 20 M4 14 C10 10 22 10 28 14",
				stroke: "currentColor",
				strokeWidth: "1.2"
			})]
		})
	}
];
function Heritage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "heritage",
		className: "relative px-6 py-24 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_1.1fr] md:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "kicker text-xs uppercase tracking-[0.3em]",
					children: "Chapitre 03 — L'âme"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "serif mt-6 text-5xl leading-[1] tracking-tight md:text-6xl",
					children: [
						"L'Héritage",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"des ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-terracotta",
							children: "Terres Fertiles"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex items-baseline gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "serif text-7xl italic text-saffron",
						children: "«"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "serif text-sm italic text-ink/60",
						children: "Terre Fertile, Saveurs d'Avenir."
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 text-base leading-relaxed text-ink/75",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"De la ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "serif italic",
							children: "Chaouia"
						}),
						", plaine généreuse et nourricière, jusqu'aux rivages des ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "serif italic",
							children: "Doukkala"
						}),
						", la région Casablanca-Settat porte une mémoire culinaire forgée par la patience des paysans, la rigueur des moissons et la lumière franche de l'Atlantique."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Chaque plat de notre table puise dans ce sol : l'agneau élevé en pâturages ouverts, le potiron des champs sablonneux, l'huile d'olive arrachée à l'amertume, le smen affiné dans le silence des jarres." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
						initial: "hidden",
						whileInView: "show",
						viewport: {
							once: true,
							margin: "-80px"
						},
						variants: {
							hidden: {},
							show: { transition: { staggerChildren: .12 } }
						},
						className: "mt-10 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3",
						children: pillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							variants: {
								hidden: {
									opacity: 0,
									y: 16
								},
								show: {
									opacity: 1,
									y: 0,
									transition: { duration: .7 }
								}
							},
							className: "flex flex-col gap-4 bg-cream p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-terracotta",
									children: p.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "serif text-xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs leading-relaxed text-ink/60",
									children: p.text
								})
							]
						}, p.title))
					})
				]
			})]
		})
	});
}
var entree_3_default = "/assets/entree%203-C0igVAy3.jpeg";
var spices = [
	{
		name: "Safran de Taliouine",
		note: "Filaments rouge profond"
	},
	{
		name: "Smen beldi",
		note: "Beurre clarifié affiné"
	},
	{
		name: "Fruits secs",
		note: "Pruneaux, amandes, abricots"
	},
	{
		name: "Cannelle de Ceylan",
		note: "Bâtons entiers infusés"
	},
	{
		name: "Fleur d'oranger",
		note: "Distillation des Doukkala"
	}
];
function SignatureDish() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "plat",
		className: "relative bg-ink px-6 py-28 text-cream md:px-10 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 opacity-[0.06]",
			style: {
				backgroundImage: "radial-gradient(oklch(1 0 0) 1px, transparent 1px)",
				backgroundSize: "4px 4px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1.1fr_1fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlateFrame, {
				label: "Épaule d'agneau dokkali",
				caption: "Pièce maîtresse",
				variant: "ember",
				ratio: "square",
				className: "w-full",
				imageSrc: entree_3_default
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "kicker text-xs uppercase tracking-[0.3em] text-saffron",
					children: "Chapitre 04 — La pièce maîtresse"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: { duration: .9 },
					className: "serif mt-6 text-5xl leading-[1] md:text-6xl",
					children: [
						"L'",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-saffron",
							children: "Épaule"
						}),
						" d'Agneau",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Dokkali."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-xl text-base leading-relaxed text-cream/75",
					children: "Confite des heures durant dans son jus, l'épaule s'effiloche sous la cuillère. Elle rencontre les fruits secs caramélisés et le velouté d'épices anciennes — symbole de générosité, geste des grandes occasions et signature d'une table où l'on s'attable longtemps."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-px bg-cream/10 sm:grid-cols-3",
					children: spices.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-ink p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "serif text-sm italic text-saffron",
							children: s.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] uppercase tracking-[0.15em] text-cream/50",
							children: s.note
						})]
					}, s.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-cream/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cuisson — 7 heures" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-cream/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service — au plat" })
					]
				})
			] })]
		})]
	});
}
var dishes = [
	{
		n: "I",
		name: "Potiron M'assel",
		sub: "façon Doukkala",
		desc: "Potiron confit au miel sombre, cannelle et fleur d'oranger — une douceur ambrée qui appelle le pain chaud.",
		signature: "Fleur d'oranger",
		variant: "saffron",
		imageSrc: "/assets/entree%201-BV87unCe.jpeg"
	},
	{
		n: "II",
		name: "Khobiza & Épinard",
		sub: "revisités",
		desc: "Mauve sauvage des champs, épinards tendres, citron confit et huile d'olive première pression à froid.",
		signature: "Citron confit",
		variant: "olive",
		imageSrc: "/assets/entree%202-QzcX9Fha.jpeg"
	},
	{
		n: "III",
		name: "Zalouk d'Aubergine",
		sub: "façon caviar",
		desc: "Aubergines fumées au feu de bois, tomates concassées, cumin et ail — la fraîcheur du marché en bouche.",
		signature: "Aubergine fumée",
		variant: "ember",
		imageSrc: entree_3_default
	}
];
function Accompaniments() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "accompagnements",
		className: "px-6 py-28 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "kicker text-xs uppercase tracking-[0.3em]",
						children: "Chapitre 05 — Le trio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "serif mt-6 text-5xl leading-[1] tracking-tight md:text-6xl",
						children: [
							"Trois ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-terracotta",
								children: "accompagnements"
							}),
							",",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"trois signatures du terroir."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZelligeDivider, { className: "mt-8" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-100px"
				},
				variants: {
					hidden: {},
					show: { transition: { staggerChildren: .15 } }
				},
				className: "mt-20 grid gap-10 md:grid-cols-3 md:gap-8",
				children: dishes.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					variants: {
						hidden: {
							opacity: 0,
							y: 30
						},
						show: {
							opacity: 1,
							y: 0,
							transition: {
								duration: .8,
								ease: [
									.16,
									1,
									.3,
									1
								]
							}
						}
					},
					className: "group flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlateFrame, {
							label: d.name,
							caption: d.n,
							variant: d.variant,
							ratio: "portrait",
							className: "w-full transition-transform duration-700 group-hover:-translate-y-2",
							imageSrc: d.imageSrc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-baseline gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "serif text-3xl italic text-saffron",
								children: [d.n, "."]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "serif text-2xl leading-tight",
								children: d.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "serif text-sm italic text-ink/60",
								children: d.sub
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-ink/70",
							children: d.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-terracotta",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-terracotta/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d.signature })]
						})
					]
				}, d.n))
			})]
		})
	});
}
var cadre_default = "/assets/cadre-BHn5p13P.jpeg";
function TeaRitual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "the",
		className: "relative overflow-hidden px-6 py-28 md:px-10 md:py-36",
		style: { background: "var(--cream-deep)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlateFrame, {
				label: "Théière en argent",
				caption: "Le rituel",
				variant: "olive",
				ratio: "square",
				className: "w-full max-w-md",
				imageSrc: cadre_default
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "kicker text-xs uppercase tracking-[0.3em]",
					children: "Chapitre 06 — La clôture"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: { duration: .9 },
					className: "serif mt-6 text-5xl leading-[1] md:text-6xl",
					children: [
						"Le rituel du",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-terracotta",
							children: "service du thé"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 max-w-xl text-base leading-relaxed text-ink/75",
					children: [
						"Versé de haut, dans un geste hérité, le thé à la menthe vient sceller la",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "serif italic",
							children: " Diyafa"
						}),
						". Trois verres, trois temps — doux comme la vie, fort comme l'amitié, amer comme la mort. C'est le dernier mot, celui que l'on prolonge sans se presser."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-ink/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Menthe fraîche" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-ink/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Thé vert Gunpowder" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-px w-8 bg-ink/30 md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden md:inline",
							children: "Sucre de canne"
						})
					]
				})
			] })]
		})
	});
}
function ReservationForm() {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		setSubmitting(true);
		const form = e.currentTarget;
		setTimeout(() => {
			setSubmitting(false);
			form.reset();
			toast.success("Votre demande a été reçue", { description: "Notre équipe vous recontactera sous 24h pour confirmer." });
		}, 700);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reserver",
		className: "relative bg-ink px-6 py-28 text-cream md:px-10 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.1fr] md:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "kicker text-xs uppercase tracking-[0.3em] text-saffron",
					children: "Chapitre 07 — L'invitation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: { duration: .9 },
					className: "serif mt-6 text-5xl leading-[1] md:text-6xl",
					children: [
						"Vivez l'expérience",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-saffron",
							children: "gastronomique"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-md text-base leading-relaxed text-cream/70",
					children: "Une table, un soir, une histoire. Confiez-nous vos envies — nous prendrons le temps qu'il faut pour répondre, comme l'on prépare un repas qui compte."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-12 space-y-6 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "serif w-24 text-xs uppercase tracking-[0.25em] text-cream/40",
								children: "Lieu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "serif italic text-cream/90",
								children: "Casablanca-Settat, Maroc"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "serif w-24 text-xs uppercase tracking-[0.25em] text-cream/40",
								children: "Contact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "serif italic text-cream/90",
								children: "contact@diyafa.ma"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "serif w-24 text-xs uppercase tracking-[0.25em] text-cream/40",
								children: "Saison"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "serif italic text-cream/90",
								children: "Sur réservation, toute l'année"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "serif mt-12 max-w-md text-xs italic text-cream/50",
					children: "Avec nos remerciements au jury du Concours de l'Hospitalité à travers la Gastronomie, pour l'encouragement des jeunes talents du terroir."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nom complet",
						name: "name",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Téléphone",
						name: "phone",
						type: "tel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						name: "email",
						type: "email",
						required: true,
						className: "sm:col-span-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Date souhaitée",
						name: "date",
						type: "date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nombre de convives",
						name: "guests",
						type: "number",
						min: 2,
						max: 40,
						defaultValue: 6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "serif block text-[10px] uppercase tracking-[0.3em] text-cream/50",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 4,
							placeholder: "Occasion, préférences, allergies…",
							className: "serif mt-2 w-full border-b border-cream/20 bg-transparent py-3 text-sm italic text-cream placeholder:text-cream/30 focus:border-saffron focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: submitting,
						className: "serif group sm:col-span-2 mt-4 inline-flex items-center justify-between gap-3 border border-cream/30 bg-transparent px-7 py-5 text-sm uppercase tracking-[0.25em] text-cream transition hover:border-saffron hover:bg-saffron hover:text-ink disabled:opacity-60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: submitting ? "Envoi en cours…" : "Demander une réservation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "transition-transform group-hover:translate-x-2",
							children: "→"
						})]
					})
				]
			})]
		})
	});
}
function Field({ label, name, type = "text", required, className = "", ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "serif block text-[10px] uppercase tracking-[0.3em] text-cream/50",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 text-saffron",
				children: "*"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			name,
			required,
			...rest,
			className: "serif mt-2 w-full border-b border-cream/20 bg-transparent py-3 text-sm italic text-cream placeholder:text-cream/30 focus:border-saffron focus:outline-none [color-scheme:dark]"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-ink/15 bg-cream px-6 py-14 md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_png_default,
						alt: "Patritalent — Un saveur d'hier, talent d'aujourd'hui",
						className: "h-20 w-auto md:h-24",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "serif text-xs italic text-ink/60",
						children: "Concours de l'Hospitalité à travers la Gastronomie"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs leading-relaxed text-ink/55",
					children: "« Terre Fertile, Saveurs d'Avenir. » — Un hommage aux producteurs, artisans et jeunes talents de Casablanca-Settat."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-ink/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "hover:text-ink",
						children: "Retour en haut"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#heritage",
						className: "hover:text-ink",
						children: "Héritage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#plat",
						className: "hover:text-ink",
						children: "Le plat"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#reserver",
						className: "hover:text-ink",
						children: "Réserver"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-3 w-px bg-ink/30 md:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						"aria-label": "Instagram",
						className: "hover:text-ink",
						children: "Instagram"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						"aria-label": "LinkedIn",
						className: "hover:text-ink",
						children: "LinkedIn"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-ink/10 pt-6 text-[10px] uppercase tracking-[0.3em] text-ink/40 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Patritalent — Tous droits réservés"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "serif italic normal-case tracking-normal",
				children: "Mentions & crédits — Une création éditoriale du terroir"
			})]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heritage, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignatureDish, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accompaniments, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeaRitual, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationForm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-right" })
		]
	});
}
//#endregion
export { Index as component };
