(this["webpackJsonpmy-react-project"] =
  this["webpackJsonpmy-react-project"] || []).push([
  [0],
  {
    27: function (e, t, a) {},
    28: function (e, t, a) {},
    35: function (e, t, a) {},
    36: function (e, t, a) {},
    37: function (e, t, a) {},
    38: function (e, t, a) {},
    39: function (e, t, a) {},
    40: function (e, t, a) {},
    41: function (e, t, a) {},
    42: function (e, t, a) {},
    43: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        s = a.n(n),
        i = a(20),
        c = a.n(i),
        r = a(12),
        o = (a(27), a(28), a(6)),
        l = a.p + "static/media/MadWomenLogo_1v2.819d60cf.svg",
        h = a(0);
      function p() {
        return Object(h.jsxs)("main", {
          className: "container",
          children: [
            Object(h.jsx)("img", {
              className: "container__logo",
              src: l,
              alt: "logo awesome",
            }),
            Object(h.jsx)("h1", {
              className: "container__title",
              children: "Crea tu tarjeta de visita",
            }),
            Object(h.jsx)("p", {
              className: "container__paragraph",
              children:
                "Crea mejores contactos profesionales de forma f\xe1cil y c\xf3moda",
            }),
            Object(h.jsxs)("section", {
              className: "container__box",
              children: [
                Object(h.jsxs)("div", {
                  className: "item",
                  children: [
                    Object(h.jsx)("i", {
                      className: "far fa-object-ungroup item__square",
                    }),
                    Object(h.jsx)("p", {
                      className: "item__word",
                      children: "Dise\xf1a",
                    }),
                  ],
                }),
                Object(h.jsxs)("div", {
                  className: "item",
                  children: [
                    Object(h.jsx)("i", {
                      className: "far fa-keyboard item__square",
                    }),
                    Object(h.jsx)("p", {
                      className: "item__word",
                      children: "Rellena",
                    }),
                  ],
                }),
                Object(h.jsxs)("div", {
                  className: "item",
                  children: [
                    Object(h.jsx)("i", {
                      className: "fas fa-share-alt item__square",
                    }),
                    Object(h.jsx)("p", {
                      className: "item__word",
                      children: "Comparte",
                    }),
                  ],
                }),
              ],
            }),
            Object(h.jsx)(r.b, {
              to: "/GeneratorCard",
              title: "Comienza a crear tu tarjeta",
              className: "container__button",
              children: "Comenzar",
            }),
          ],
        });
      }
      var j = a(22),
        d = a(2),
        u = a(3),
        m = a(8),
        b = a(5),
        O = a(4),
        f = a.p + "static/media/MadWomenLogo_2.2637196b.svg",
        g =
          (a(35),
          (function (e) {
            Object(b.a)(a, e);
            var t = Object(O.a)(a);
            function a() {
              return Object(d.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(u.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return Object(h.jsx)("header", {
                      className: "header",
                      children: Object(h.jsx)(r.b, {
                        to: "/",
                        children: Object(h.jsx)("img", {
                          className: "header__img",
                          src: f,
                          title: "Go to home page",
                          alt: "Mad Women",
                        }),
                      }),
                    });
                  },
                },
              ]),
              a
            );
          })(s.a.Component)),
        x = (function (e) {
          Object(b.a)(a, e);
          var t = Object(O.a)(a);
          function a() {
            return Object(d.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(u.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)("button", {
                    className: "generator__article--button1 js-reset",
                    onClick: this.props.handleReset,
                    children: [
                      Object(h.jsx)("i", { className: "far fa-trash-alt" }),
                      Object(h.jsx)("span", { children: "Reset" }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        v = a.p + "static/media/joan-holloway.5e5d0016.jpg",
        N =
          (a(36),
          (function (e) {
            Object(b.a)(a, e);
            var t = Object(O.a)(a);
            function a() {
              return Object(d.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(u.a)(a, [
                {
                  key: "render",
                  value: function () {
                    var e = "" === this.props.photo ? v : this.props.photo;
                    return Object(h.jsx)("div", {
                      className: "js__profile-image container__img",
                      style: { backgroundImage: "url(".concat(e, ")") },
                    });
                  },
                },
              ]),
              a
            );
          })(s.a.Component)),
        _ = (function (e) {
          Object(b.a)(a, e);
          var t = Object(O.a)(a);
          function a() {
            return Object(d.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(u.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsx)("li", {
                    className: "menu__item",
                    children: Object(h.jsx)("a", {
                      className: "js-card-".concat(this.props.aClassName),
                      href: this.props.href,
                      target: "_blank",
                      rel: "noreferrer",
                      children: Object(h.jsx)("i", {
                        className: "menu__item--icon ".concat(
                          this.props.iClassName
                        ),
                      }),
                    }),
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        C = (function (e) {
          Object(b.a)(a, e);
          var t = Object(O.a)(a);
          function a() {
            return Object(d.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(u.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)("div", {
                    className: "generator__article--container palette-".concat(
                      this.props.palette
                    ),
                    children: [
                      Object(h.jsxs)("div", {
                        className: "container__nameprofession",
                        children: [
                          Object(h.jsx)("h2", {
                            className:
                              "container__nameprofession--name js-card-name",
                            children: this.props.name || "Joan Holloway",
                          }),
                          Object(h.jsx)("h3", {
                            className:
                              "container__nameprofession--profession js-card-job",
                            children: this.props.job || "Office manager",
                          }),
                        ],
                      }),
                      Object(h.jsx)(N, { photo: this.props.photo }),
                      Object(h.jsx)("nav", {
                        className: "container__nav",
                        children: Object(h.jsxs)("ul", {
                          className: "menu",
                          children: [
                            Object(h.jsx)(_, {
                              href: this.props.phone
                                ? "tel:".concat(this.props.phone)
                                : "tel:",
                              aClassName: "phone",
                              iClassName: "fas fa-mobile-alt",
                            }),
                            Object(h.jsx)(_, {
                              href: this.props.email
                                ? "mailto:".concat(this.props.email)
                                : "#",
                              aClassName: "email",
                              iClassName: "far fa-envelope",
                            }),
                            Object(h.jsx)(_, {
                              href: this.props.linkedin.includes(
                                "https://www.linkedin.com/"
                              )
                                ? "".concat(this.props.linkedin)
                                : this.props.linkedin
                                ? "https://www.linkedin.com/in/".concat(
                                    this.props.linkedin
                                  )
                                : "https://www.linkedin.com",
                              aClassName: "linkedin",
                              iClassName: "fab fa-linkedin-in",
                            }),
                            Object(h.jsx)(_, {
                              href: this.props.github.includes(
                                "https://github.com/"
                              )
                                ? "".concat(this.props.github)
                                : "https://github.com/".concat(
                                    this.props.github
                                  ),
                              aClassName: "github",
                              iClassName: "fab fa-github-alt",
                            }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        k = (function (e) {
          Object(b.a)(a, e);
          var t = Object(O.a)(a);
          function a() {
            return Object(d.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(u.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)("legend", {
                    className: "".concat(
                      this.props.className,
                      "__title js-title"
                    ),
                    onClick: this.props.clickEvent,
                    children: [
                      Object(h.jsxs)("div", {
                        className: "".concat(
                          this.props.className,
                          "__title--container"
                        ),
                        children: [
                          Object(h.jsx)("i", {
                            className: this.props.icon + " icon",
                          }),
                          Object(h.jsx)("h2", {
                            className: "word",
                            children: this.props.name,
                          }),
                        ],
                      }),
                      Object(h.jsx)("i", {
                        className: "collapsable__icon fas fa-chevron-up arrow",
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        y = (function (e) {
          Object(b.a)(a, e);
          var t = Object(O.a)(a);
          function a(e) {
            var n;
            return (
              Object(d.a)(this, a),
              ((n = t.call(this, e)).state = { isOpen: !1 }),
              (n.handleClick = n.handleClick.bind(Object(m.a)(n))),
              n
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: "handleClick",
                value: function () {
                  this.setState({ isOpen: !this.state.isOpen });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = "",
                    t = this.props.className,
                    a = this.state.isOpen
                      ? "collapsable__open"
                      : "collapsable__close";
                  return (
                    "design" === t && (e = "__palette"),
                    Object(h.jsxs)("fieldset", {
                      className: "js-container "
                        .concat(a, " ")
                        .concat(this.props.className),
                      children: [
                        Object(h.jsx)(k, {
                          className: this.props.className,
                          name: this.props.name,
                          icon: this.props.icon,
                          clickEvent: this.handleClick,
                        }),
                        Object(h.jsx)("div", {
                          className: ""
                            .concat(this.props.className)
                            .concat(e, " collapsable__content"),
                          children: this.props.children,
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        I = (function (e) {
          Object(b.a)(a, e);
          var t = Object(O.a)(a);
          function a(e) {
            return Object(d.a)(this, a), t.call(this, e);
          }
          return (
            Object(u.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = ["A", "B", "C"].map(function (t, a) {
                      return Object(h.jsxs)(
                        "li",
                        {
                          className:
                            "design__palette".concat(e.props.value, "--color") +
                            (a + 1),
                          children: ["color", t],
                        },
                        a
                      );
                    });
                  return Object(h.jsxs)("label", {
                    className: "design__palette--input",
                    htmlFor: "",
                    children: [
                      Object(h.jsx)("input", {
                        className: "js-palette",
                        type: "radio",
                        name: "palette",
                        value: this.props.value,
                        checked: this.props.checked === this.props.value,
                        onChange: this.props.handleInput,
                      }),
                      Object(h.jsx)("ul", {
                        className: "design__palette--list ",
                        children: t,
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        w =
          (a(37),
          (function (e) {
            Object(b.a)(a, e);
            var t = Object(O.a)(a);
            function a(e) {
              var n;
              return (
                Object(d.a)(this, a),
                ((n = t.call(this, e)).getChangeInput = n.getChangeInput.bind(
                  Object(m.a)(n)
                )),
                n
              );
            }
            return (
              Object(u.a)(a, [
                {
                  key: "getChangeInput",
                  value: function (e) {
                    this.props.handleInput(e.target.name, e.target.value);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(h.jsxs)(h.Fragment, {
                      children: [
                        Object(h.jsx)("h3", {
                          className: "design__palette--colors",
                          children: "Colores",
                        }),
                        Object(h.jsxs)("div", {
                          children: [
                            Object(h.jsx)(I, {
                              value: "1",
                              checked: this.props.palette,
                              handleInput: this.getChangeInput,
                            }),
                            Object(h.jsx)(I, {
                              value: "2",
                              checked: this.props.palette,
                              handleInput: this.getChangeInput,
                            }),
                            Object(h.jsx)(I, {
                              value: "3",
                              checked: this.props.palette,
                              handleInput: this.getChangeInput,
                            }),
                            Object(h.jsx)(I, {
                              value: "4",
                              checked: this.props.palette,
                              handleInput: this.getChangeInput,
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                },
              ]),
              a
            );
          })(s.a.Component)),
        S = (function (e) {
          Object(b.a)(a, e);
          var t = Object(O.a)(a);
          function a() {
            return Object(d.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(u.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)(h.Fragment, {
                    children: [
                      Object(h.jsx)("label", {
                        className: "fill__box--label name",
                        htmlFor: this.props.htmlFor,
                        children: this.props.setName,
                      }),
                      Object(h.jsx)("input", {
                        value: this.props.value,
                        onChange: this.props.onChange,
                        className: "fill__box--input js-input-"
                          .concat(this.className, " js-input-text ")
                          .concat(this.className),
                        placeholder: this.props.placeholder,
                        type: this.props.type,
                        id: this.props.id,
                        name: this.props.name,
                        pattern: this.props.pattern,
                        required: !0,
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        F =
          (a(38),
          a(39),
          (function (e) {
            Object(b.a)(a, e);
            var t = Object(O.a)(a);
            function a(e) {
              var n;
              return (
                Object(d.a)(this, a),
                ((n = t.call(this, e)).fr = new FileReader()),
                (n.myFileField = s.a.createRef()),
                (n.uploadImage = n.uploadImage.bind(Object(m.a)(n))),
                (n.getImage = n.getImage.bind(Object(m.a)(n))),
                n
              );
            }
            return (
              Object(u.a)(a, [
                {
                  key: "uploadImage",
                  value: function (e) {
                    if (e.currentTarget.files.length > 0) {
                      var t = e.currentTarget.files[0];
                      this.fr.addEventListener("load", this.getImage),
                        this.fr.readAsDataURL(t);
                    }
                  },
                },
                {
                  key: "getImage",
                  value: function () {
                    var e = this.fr.result;
                    this.props.updatePhoto(e);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = "" === this.props.photo ? v : this.props.photo;
                    return Object(h.jsxs)(h.Fragment, {
                      children: [
                        Object(h.jsx)("div", {
                          className: "fill__box--label imgLabel",
                          children: "Imagen de perfil",
                        }),
                        Object(h.jsxs)("div", {
                          className: "addImage",
                          children: [
                            Object(h.jsxs)("label", {
                              type: "button",
                              htmlFor: "photo",
                              className:
                                "js__profile-trigger fill__box--input buttonImg",
                              children: [
                                "A\xf1adir imagen",
                                Object(h.jsx)("input", {
                                  className:
                                    "js__profile-upload-btn buttonInput",
                                  type: "file",
                                  ref: this.myFileField,
                                  onChange: this.uploadImage,
                                  id: "photo",
                                  name: "photo",
                                  required: !0,
                                }),
                              ],
                            }),
                            Object(h.jsx)("div", {
                              className: "js__profile-preview preview",
                              style: { backgroundImage: "url(".concat(e, ")") },
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                },
              ]),
              a
            );
          })(s.a.Component)),
        L = (function (e) {
          Object(b.a)(a, e);
          var t = Object(O.a)(a);
          function a(e) {
            var n;
            return (
              Object(d.a)(this, a),
              ((n = t.call(this, e)).getChangeInput = n.getChangeInput.bind(
                Object(m.a)(n)
              )),
              n
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: "getChangeInput",
                value: function (e) {
                  this.props.handleInput(
                    e.currentTarget.name,
                    e.currentTarget.value
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)("div", {
                    className: "fill__box collapsable__content",
                    children: [
                      Object(h.jsx)(S, {
                        value: this.props.name,
                        htmlFor: "Name",
                        setName: "Nombre Completo",
                        onChange: this.getChangeInput,
                        className: "name",
                        placeholder: "Ej: Joan Holloway",
                        type: "text",
                        id: "name",
                        name: "name",
                        required: !0,
                      }),
                      Object(h.jsx)(S, {
                        value: this.props.job,
                        htmlFor: "job",
                        setName: "Puesto",
                        onChange: this.getChangeInput,
                        className: "job",
                        placeholder: "Ej: Office manager",
                        type: "text",
                        id: "job",
                        name: "job",
                        required: !0,
                      }),
                      Object(h.jsx)(F, {
                        photo: this.props.photo,
                        updatePhoto: this.props.updatePhoto,
                      }),
                      Object(h.jsx)(S, {
                        value: this.props.email,
                        htmlFor: "email",
                        setName: "Email",
                        onChange: this.getChangeInput,
                        className: "email",
                        placeholder: "Ej: joan-holloway@gmail.com",
                        type: "email",
                        id: "email",
                        name: "email",
                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                        required: !0,
                      }),
                      Object(h.jsx)(S, {
                        value: this.props.phone,
                        htmlFor: "phone",
                        setName: "Tel\xe9fono",
                        onChange: this.getChangeInput,
                        className: "phone",
                        placeholder: "Ej:+34 666666666",
                        type: "tel",
                        id: "phone",
                        name: "phone",
                        pattern: "^[0-9]{9}$",
                        required: !0,
                      }),
                      Object(h.jsx)(S, {
                        value: this.props.linkedin,
                        htmlFor: "linkedin",
                        setName: "Linkedin",
                        onChange: this.getChangeInput,
                        className: "linkedin",
                        placeholder: "Ej: joan.holloway",
                        type: "text",
                        id: "linkedin",
                        name: "linkedin",
                      }),
                      Object(h.jsx)(S, {
                        value: this.props.github,
                        htmlFor: "github",
                        setName: "Github",
                        onChange: this.getChangeInput,
                        className: "github",
                        placeholder: "Ej: @joan-holloway",
                        type: "text",
                        id: "github",
                        name: "github",
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component);
      a(40);
      var R = function (e) {
        return (
          console.log(e.serverData),
          Object(h.jsxs)("div", {
            className: "share__box collapsable__content collapsable__open",
            children: [
              Object(h.jsxs)("button", {
                className: "share__box--button js-create-btn",
                type: "button",
                title: "Create card",
                onClick: function () {
                  e.handleShare();
                },
                children: [
                  Object(h.jsx)("i", {
                    className: "iconCard far fa-address-card",
                  }),
                  "Crear tarjeta",
                ],
              }),
              Object(h.jsx)("div", {
                className: "js-required ".concat(e.hiddenClass),
                children: (function () {
                  if (!0 === e.serverData.success)
                    return Object(h.jsx)(h.Fragment, {
                      children: Object(h.jsxs)("div", {
                        className: "share__box--subsection  js-display",
                        children: [
                          Object(h.jsx)("h3", {
                            className: "titleCard",
                            children: "La tarjeta ha sido creada:",
                          }),
                          Object(h.jsxs)("a", {
                            className: "linkCard js-card-result",
                            href: "".concat(e.serverData.cardURL),
                            target: "_blank",
                            rel: "noreferrer",
                            children: [" ", e.serverData.cardURL],
                          }),
                          Object(h.jsxs)("a", {
                            className: "twitterLink",
                            href: "https://twitter.com/intent/tweet?text=\xa1Echa un vistazo a la tarjeta que me he creado con Mad Women Profile Cards!&url=".concat(
                              e.serverData.cardURL,
                              "&hashtags=Adalab,promoL,MadWomen,frontend"
                            ),
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                              Object(h.jsx)("i", {
                                className: "icon fab fa-twitter",
                              }),
                              "Compartir en twitter",
                            ],
                          }),
                        ],
                      }),
                    });
                })(),
              }),
            ],
          })
        );
      };
      var D = function (e) {
        return Object(h.jsxs)("form", {
          className: "form js-submit",
          action: "create card",
          method: "GET",
          children: [
            Object(h.jsx)(y, {
              name: "Dise\xf1a",
              icon: "far fa-object-ungroup",
              className: "design",
              children: Object(h.jsx)(w, {
                palette: e.palette,
                handleInput: e.handleInput,
              }),
            }),
            Object(h.jsx)(y, {
              name: "Rellena",
              icon: "far fa-keyboard",
              className: "fill",
              children: Object(h.jsx)(L, {
                name: e.name,
                job: e.job,
                phone: e.phone,
                photo: e.photo,
                linkedin: e.linkedin,
                github: e.github,
                email: e.email,
                handleInput: e.handleInput,
                updatePhoto: e.updatePhoto,
              }),
            }),
            Object(h.jsx)(y, {
              name: "Comparte",
              icon: "fas fa-share-alt",
              className: "share",
              children: Object(h.jsx)(R, {
                name: e.name,
                job: e.job,
                phone: e.phone,
                photo: e.photo,
                linkedin: e.linkedin,
                github: e.github,
                email: e.email,
                handleShare: e.handleShare,
                serverData: e.serverData,
                hiddenClass: e.hiddenClass,
              }),
            }),
          ],
        });
      };
      var P = function (e) {
          return fetch("https://react-mad-women.herokuapp.com/card", {
            method: "POST",
            body: JSON.stringify(e),
            headers: { "Content-Type": "application/json" },
          })
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              return e;
            })
            .catch(function () {
              return {
                success: !1,
                error: "Se ha producido un error. Int\xe9ntelo m\xe1s tarde",
              };
            });
        },
        E =
          (a(41),
          (function (e) {
            Object(b.a)(a, e);
            var t = Object(O.a)(a);
            function a(e) {
              var n;
              return (
                Object(d.a)(this, a),
                ((n = t.call(this, e)).state = {
                  palette: "1",
                  name: "",
                  job: "",
                  email: "",
                  phone: "",
                  linkedin: "",
                  github: "",
                  photo: "",
                  serverData: { success: "false", cardURL: "" },
                  hiddenClass: "hidden",
                }),
                (n.handleInput = n.handleInput.bind(Object(m.a)(n))),
                (n.handleReset = n.handleReset.bind(Object(m.a)(n))),
                (n.updatePhoto = n.updatePhoto.bind(Object(m.a)(n))),
                (n.handleShare = n.handleShare.bind(Object(m.a)(n))),
                n
              );
            }
            return (
              Object(u.a)(a, [
                {
                  key: "updatePhoto",
                  value: function (e) {
                    this.setState({ photo: e });
                  },
                },
                {
                  key: "handleInput",
                  value: function (e, t) {
                    this.setState(Object(j.a)({}, e, t));
                  },
                },
                {
                  key: "handleReset",
                  value: function () {
                    this.setState({
                      palette: "1",
                      name: "",
                      job: "",
                      email: "",
                      phone: "",
                      linkedin: "",
                      github: "",
                      photo: "",
                      hiddenClass: "hidden",
                    });
                  },
                },
                {
                  key: "handleShare",
                  value: function () {
                    var e = this;
                    this.setState({ hiddenClass: "" });
                    var t = {
                      name: this.state.name,
                      job: this.state.job,
                      phone: this.state.phone,
                      email: this.state.email,
                      linkedin: this.state.linkedin,
                      github: this.state.github,
                      palette: parseInt(this.state.palette).toFixed(),
                      photo: this.state.photo,
                    };
                    P(t).then(function (t) {
                      !0 === t.success &&
                        e.setState({
                          serverData: {
                            success: t.success,
                            cardURL: t.cardURL,
                          },
                        });
                    });
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    localStorage.getItem("data") &&
                      this.getLocalStorage("data");
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    this.setLocalStorage();
                  },
                },
                {
                  key: "setLocalStorage",
                  value: function () {
                    localStorage.setItem("data", JSON.stringify(this.state));
                  },
                },
                {
                  key: "getLocalStorage",
                  value: function () {
                    var e = JSON.parse(localStorage.getItem("data"));
                    this.setState({
                      name: e.name,
                      job: e.job,
                      phone: e.phone,
                      email: e.email,
                      linkedin: e.linkedin,
                      github: e.github,
                      palette: e.palette,
                      photo: e.photo,
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(h.jsxs)(h.Fragment, {
                      children: [
                        Object(h.jsx)(g, {}),
                        Object(h.jsxs)("main", {
                          className: "wrapper",
                          children: [
                            Object(h.jsx)("section", {
                              className: "generator",
                              children: Object(h.jsxs)("article", {
                                className: "generator__article",
                                children: [
                                  Object(h.jsx)(x, {
                                    handleReset: this.handleReset,
                                  }),
                                  Object(h.jsx)(C, {
                                    palette: this.state.palette,
                                    name: this.state.name,
                                    job: this.state.job,
                                    photo: this.state.photo,
                                    phone: this.state.phone,
                                    linkedin: this.state.linkedin,
                                    github: this.state.github,
                                    email: this.state.email,
                                    handleInput: this.handleInput,
                                    updatePhoto: this.updatePhoto,
                                  }),
                                ],
                              }),
                            }),
                            Object(h.jsx)(D, {
                              palette: this.state.palette,
                              name: this.state.name,
                              job: this.state.job,
                              photo: this.state.photo,
                              phone: this.state.phone,
                              linkedin: this.state.linkedin,
                              github: this.state.github,
                              email: this.state.email,
                              handleInput: this.handleInput,
                              updatePhoto: this.updatePhoto,
                              serverData: this.state.serverData,
                              handleShare: this.handleShare,
                              hiddenClass: this.state.hiddenClass,
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                },
              ]),
              a
            );
          })(s.a.Component)),
        q =
          (a(42),
          (function (e) {
            Object(b.a)(a, e);
            var t = Object(O.a)(a);
            function a() {
              return Object(d.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(u.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return Object(h.jsxs)("footer", {
                      className: "footer",
                      children: [
                        Object(h.jsx)("small", {
                          className: "footer__small",
                          children: " Mad Women profile cards ",
                        }),
                        Object(h.jsx)(r.b, {
                          to: "/",
                          children: Object(h.jsx)("img", {
                            className: "footer__logo",
                            src: f,
                            title: "Go to home page",
                            alt: "Mad Women",
                          }),
                        }),
                      ],
                    });
                  },
                },
              ]),
              a
            );
          })(s.a.Component));
      var M = function () {
        return Object(h.jsx)("div", {
          className: "landing",
          children: Object(h.jsxs)("div", {
            className: "page",
            children: [
              Object(h.jsxs)(o.c, {
                children: [
                  Object(h.jsx)(o.a, { exact: !0, path: "/", component: p }),
                  Object(h.jsx)(o.a, { path: "/GeneratorCard", component: E }),
                ],
              }),
              Object(h.jsx)(q, {}),
            ],
          }),
        });
      };
      c.a.render(
        Object(h.jsx)(s.a.StrictMode, {
          children: Object(h.jsx)(r.a, { children: Object(h.jsx)(M, {}) }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[43, 1, 2]],
]);
//# sourceMappingURL=main.ef7f16eb.chunk.js.map
