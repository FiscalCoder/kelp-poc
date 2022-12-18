const html = `<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta charset="utf-8" />
      <meta name="generator" content="pdf2htmlEX" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <style type="text/css">
        /*! 
   * Base CSS for pdf2htmlEX
   * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> 
   * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE
   */
        #sidebar {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 250px;
          padding: 0;
          margin: 0;
          overflow: auto;
        }
        #page-container {
          position: absolute;
          top: 0;
          left: 0;
          margin: 0;
          padding: 0;
          border: 0;
        }
        @media screen {
          #sidebar.opened + #page-container {
            left: 250px;
          }
          #page-container {
            bottom: 0;
            right: 0;
            overflow: auto;
          }
          .loading-indicator {
            display: none;
          }
          .loading-indicator.active {
            display: block;
            position: absolute;
            width: 64px;
            height: 64px;
            top: 50%;
            left: 50%;
            margin-top: -32px;
            margin-left: -32px;
          }
          .loading-indicator img {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
        }
        @media print {
          @page {
            margin: 0;
          }
          html {
            margin: 0;
          }
          body {
            margin: 0;
            -webkit-print-color-adjust: exact;
          }
          #sidebar {
            display: none;
          }
          #page-container {
            width: auto;
            height: auto;
            overflow: visible;
            background-color: transparent;
          }
          .d {
            display: none;
          }
        }
        .pf {
          position: relative;
          background-color: white;
          overflow: hidden;
          margin: 0;
          border: 0;
        }
        .pc {
          position: absolute;
          border: 0;
          padding: 0;
          margin: 0;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: block;
          transform-origin: 0 0;
          -ms-transform-origin: 0 0;
          -webkit-transform-origin: 0 0;
        }
        .pc.opened {
          display: block;
        }
        .bf {
          position: absolute;
          border: 0;
          margin: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          -ms-user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          user-select: none;
        }
        .bi {
          position: absolute;
          border: 0;
          margin: 0;
          -ms-user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          user-select: none;
        }
        @media print {
          .pf {
            margin: 0;
            box-shadow: none;
            page-break-after: always;
            page-break-inside: avoid;
          }
          @-moz-document url-prefix() {
            .pf {
              overflow: visible;
              border: 1px solid #fff;
            }
            .pc {
              overflow: visible;
            }
          }
        }
        .c {
          position: absolute;
          border: 0;
          padding: 0;
          margin: 0;
          overflow: hidden;
          display: block;
        }
        .t {
          position: absolute;
          white-space: pre;
          font-size: 1px;
          transform-origin: 0 100%;
          -ms-transform-origin: 0 100%;
          -webkit-transform-origin: 0 100%;
          unicode-bidi: bidi-override;
          -moz-font-feature-settings: "liga" 0;
        }
        .t:after {
          content: "";
        }
        .t:before {
          content: "";
          display: inline-block;
        }
        .t span {
          position: relative;
          unicode-bidi: bidi-override;
        }
        ._ {
          display: inline-block;
          color: transparent;
          z-index: -1;
        }
        ::selection {
          background: rgba(127, 255, 255, 0.4);
        }
        ::-moz-selection {
          background: rgba(127, 255, 255, 0.4);
        }
        .pi {
          display: none;
        }
        .d {
          position: absolute;
          transform-origin: 0 100%;
          -ms-transform-origin: 0 100%;
          -webkit-transform-origin: 0 100%;
        }
        .it {
          border: 0;
          background-color: rgba(255, 255, 255, 0);
        }
        .ir:hover {
          cursor: pointer;
        }
      </style>
      <style type="text/css">
        /*! 
   * Fancy styles for pdf2htmlEX
   * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> 
   * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE
   */
        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @-webkit-keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @media screen {
          #sidebar {
            background-color: #2f3236;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+");
          }
          #outline {
            font-family: Georgia, Times, "Times New Roman", serif;
            font-size: 13px;
            margin: 2em 1em;
          }
          #outline ul {
            padding: 0;
          }
          #outline li {
            list-style-type: none;
            margin: 1em 0;
          }
          #outline li > ul {
            margin-left: 1em;
          }
          #outline a,
          #outline a:visited,
          #outline a:hover,
          #outline a:active {
            line-height: 1.2;
            color: #e8e8e8;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-decoration: none;
            display: block;
            overflow: hidden;
            outline: 0;
          }
          #outline a:hover {
            color: #0cf;
          }
          #page-container {
            background-color: #9e9e9e;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");
            -webkit-transition: left 500ms;
            transition: left 500ms;
          }
          .pf {
            margin: 13px auto;
            box-shadow: 1px 1px 3px 1px #333;
            border-collapse: separate;
          }
          .pc.opened {
            -webkit-animation: fadein 100ms;
            animation: fadein 100ms;
          }
          .loading-indicator.active {
            -webkit-animation: swing 1.5s ease-in-out 0.01s infinite alternate
              none;
            animation: swing 1.5s ease-in-out 0.01s infinite alternate none;
          }
          .checked {
            background: no-repeat
              url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goQDSYgDiGofgAAAslJREFUOMvtlM9LFGEYx7/vvOPM6ywuuyPFihWFBUsdNnA6KLIh+QPx4KWExULdHQ/9A9EfUodYmATDYg/iRewQzklFWxcEBcGgEplDkDtI6sw4PzrIbrOuedBb9MALD7zv+3m+z4/3Bf7bZS2bzQIAcrmcMDExcTeXy10DAFVVAQDksgFUVZ1ljD3yfd+0LOuFpmnvVVW9GHhkZAQcxwkNDQ2FSCQyRMgJxnVdy7KstKZpn7nwha6urqqfTqfPBAJAuVymlNLXoigOhfd5nmeiKL5TVTV+lmIKwAOA7u5u6Lped2BsbOwjY6yf4zgQQkAIAcedaPR9H67r3uYBQFEUFItFtLe332lpaVkUBOHK3t5eRtf1DwAwODiIubk5DA8PM8bYW1EU+wEgCIJqsCAIQAiB7/u253k2BQDDMJBKpa4mEon5eDx+UxAESJL0uK2t7XosFlvSdf0QAEmlUnlRFJ9Waho2Qghc1/U9z3uWz+eX+Wr+lL6SZfleEAQIggA8z6OpqSknimIvYyybSCReMsZ6TislhCAIAti2Dc/zejVNWwCAavN8339j27YbTg0AGGM3WltbP4WhlRWq6Q/btrs1TVsYHx+vNgqKoqBUKn2NRqPFxsbGJzzP05puUlpt0ukyOI6z7zjOwNTU1OLo6CgmJyf/gA3DgKIoWF1d/cIY24/FYgOU0pp0z/Ityzo8Pj5OTk9PbwHA+vp6zWghDC+VSiuRSOQgGo32UErJ38CO42wdHR09LBQK3zKZDDY2NupmFmF4R0cHVlZWlmRZ/iVJUn9FeWWcCCE4ODjYtG27Z2Zm5juAOmgdGAB2d3cBADs7O8uSJN2SZfl+WKlpmpumaT6Yn58vn/fs6XmbhmHMNjc3tzDGFI7jYJrm5vb29sDa2trPC/9aiqJUy5pOp4f6+vqeJ5PJBAB0dnZe/t8NBajx/z37Df5OGX8d13xzAAAAAElFTkSuQmCC);
          }
        }
      </style>
      <style type="text/css">
        .ff0 {
          font-family: sans-serif;
          visibility: hidden;
        }
        .ff1 {
          font-family: sans-serif;
          visibility: hidden;
        }
        @font-face {
          font-family: ff2;
          src: url("data:application/font-woff;base64,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")
            format("woff");
        }
        .ff2 {
          font-family: ff2;
          line-height: 1.181818;
          font-style: normal;
          font-weight: normal;
          visibility: visible;
        }
        @font-face {
          font-family: ff3;
          src: url("data:application/font-woff;base64,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")
            format("woff");
        }
        .ff3 {
          font-family: ff3;
          line-height: 1.181818;
          font-style: normal;
          font-weight: normal;
          visibility: visible;
        }
        @font-face {
          font-family: ff4;
          src: url("data:application/font-woff;base64,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")
            format("woff");
        }
        .ff4 {
          font-family: ff4;
          line-height: 0.996;
          font-style: normal;
          font-weight: normal;
          visibility: visible;
        }
        .m0 {
          transform: matrix(0.25, 0, 0, 0.25, 0, 0);
          -ms-transform: matrix(0.25, 0, 0, 0.25, 0, 0);
          -webkit-transform: matrix(0.25, 0, 0, 0.25, 0, 0);
        }
        .m1 {
          transform: none;
          -ms-transform: none;
          -webkit-transform: none;
        }
        .v0 {
          vertical-align: 0px;
        }
        .ls0 {
          letter-spacing: 0px;
        }
        .sc_ {
          text-shadow: none;
        }
        .sc0 {
          text-shadow: -0.015em 0 transparent, 0 0.015em transparent,
            0.015em 0 transparent, 0 -0.015em transparent;
        }
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          .sc_ {
            -webkit-text-stroke: 0px transparent;
          }
          .sc0 {
            -webkit-text-stroke: 0.015em transparent;
            text-shadow: none;
          }
        }
        .wsa {
          word-spacing: -9.342766px;
        }
        .ws2 {
          word-spacing: -9.070297px;
        }
        .ws5 {
          word-spacing: -8.545213px;
        }
        .ws7 {
          word-spacing: -8.372582px;
        }
        .ws6 {
          word-spacing: -6.851362px;
        }
        .wsc {
          word-spacing: 0px;
        }
        .ws3 {
          word-spacing: 26.378754px;
        }
        .ws0 {
          word-spacing: 26.379913px;
        }
        .ws1 {
          word-spacing: 26.385739px;
        }
        .ws4 {
          word-spacing: 26.387055px;
        }
        .ws9 {
          word-spacing: 310.533555px;
        }
        .wsb {
          word-spacing: 310.555136px;
        }
        .ws8 {
          word-spacing: 312.076454px;
        }
        ._2 {
          margin-left: -4.144203px;
        }
        ._3 {
          margin-left: -2.719647px;
        }
        ._0 {
          margin-left: -1.354969px;
        }
        ._4 {
          width: 1.027101px;
        }
        ._1 {
          width: 34.923521px;
        }
        ._5 {
          width: 320.936795px;
        }
        .fc4 {
          color: transparent;
        }
        .fc3 {
          color: rgb(248, 116, 60);
        }
        .fc2 {
          color: rgb(56, 67, 71);
        }
        .fc1 {
          color: rgb(0, 0, 0);
        }
        .fc0 {
          color: rgb(101, 105, 109);
        }
        .fs0 {
          font-size: 27.851063px;
        }
        .fs4 {
          font-size: 30.382978px;
        }
        .fs1 {
          font-size: 32.914893px;
        }
        .fs5 {
          font-size: 37.978723px;
        }
        .fs3 {
          font-size: 40.510637px;
        }
        .fs2 {
          font-size: 70.893615px;
        }
        .y0 {
          bottom: -0.5px;
        }
        .y8 {
          bottom: 0.058311px;
        }
        .y65 {
          bottom: 2.53189px;
        }
        .y58 {
          bottom: 2.531891px;
        }
        .y54 {
          bottom: 2.531892px;
        }
        .y50 {
          bottom: 2.531894px;
        }
        .y52 {
          bottom: 2.531897px;
        }
        .y7d {
          bottom: 2.531902px;
        }
        .y45 {
          bottom: 2.531905px;
        }
        .y5d {
          bottom: 2.531909px;
        }
        .y63 {
          bottom: 2.531911px;
        }
        .y42 {
          bottom: 2.531912px;
        }
        .y79 {
          bottom: 2.531916px;
        }
        .y67 {
          bottom: 2.531917px;
        }
        .y4e {
          bottom: 2.531922px;
        }
        .y47 {
          bottom: 2.531923px;
        }
        .y5b {
          bottom: 2.531938px;
        }
        .y1e {
          bottom: 11.393592px;
        }
        .y14 {
          bottom: 11.393593px;
        }
        .y11 {
          bottom: 11.393594px;
        }
        .yd {
          bottom: 11.393596px;
        }
        .yf {
          bottom: 11.393598px;
        }
        .y19 {
          bottom: 11.393611px;
        }
        .y1c {
          bottom: 11.393613px;
        }
        .y20 {
          bottom: 11.393619px;
        }
        .y6 {
          bottom: 11.393625px;
        }
        .y64 {
          bottom: 12.659549px;
        }
        .y57 {
          bottom: 12.65955px;
        }
        .y53 {
          bottom: 12.659552px;
        }
        .y4f {
          bottom: 12.659553px;
        }
        .y51 {
          bottom: 12.659556px;
        }
        .y7c {
          bottom: 12.659561px;
        }
        .y44 {
          bottom: 12.659564px;
        }
        .y5c {
          bottom: 12.659569px;
        }
        .y62 {
          bottom: 12.65957px;
        }
        .y41 {
          bottom: 12.659572px;
        }
        .y78 {
          bottom: 12.659575px;
        }
        .y66 {
          bottom: 12.659576px;
        }
        .y4d {
          bottom: 12.659581px;
        }
        .y46 {
          bottom: 12.659582px;
        }
        .y5a {
          bottom: 12.659597px;
        }
        .y4 {
          bottom: 21.521266px;
        }
        .y2b {
          bottom: 21.521271px;
        }
        .y2 {
          bottom: 21.521273px;
        }
        .y27 {
          bottom: 21.521277px;
        }
        .yb {
          bottom: 21.521283px;
        }
        .y17 {
          bottom: 21.521299px;
        }
        .y7b {
          bottom: 22.787221px;
        }
        .y43 {
          bottom: 22.787223px;
        }
        .y76 {
          bottom: 22.787229px;
        }
        .y40 {
          bottom: 22.787231px;
        }
        .y77 {
          bottom: 22.787235px;
        }
        .y4c {
          bottom: 22.787241px;
        }
        .y59 {
          bottom: 22.787256px;
        }
        .y29 {
          bottom: 31.648923px;
        }
        .y7a {
          bottom: 32.91488px;
        }
        .y75 {
          bottom: 32.914888px;
        }
        .y74 {
          bottom: 43.042547px;
        }
        .y6b {
          bottom: 46.207431px;
        }
        .y23 {
          bottom: 46.207453px;
        }
        .y25 {
          bottom: 51.904249px;
        }
        .y73 {
          bottom: 53.170207px;
        }
        .y6a {
          bottom: 58.234026px;
        }
        .y37 {
          bottom: 59.499984px;
        }
        .y69 {
          bottom: 70.260622px;
        }
        .y36 {
          bottom: 75.324452px;
        }
        .y68 {
          bottom: 88.617004px;
        }
        .y82 {
          bottom: 93.680834px;
        }
        .y21 {
          bottom: 120.32427px;
        }
        .y35 {
          bottom: 130.393599px;
        }
        .y1f {
          bottom: 141.845525px;
        }
        .y34 {
          bottom: 146.218067px;
        }
        .y33 {
          bottom: 162.042535px;
        }
        .y1d {
          bottom: 163.366828px;
        }
        .y81 {
          bottom: 180.398917px;
        }
        .y1b {
          bottom: 184.888083px;
        }
        .y61 {
          bottom: 209.515938px;
        }
        .y32 {
          bottom: 217.111683px;
        }
        .y60 {
          bottom: 219.643597px;
        }
        .y22 {
          bottom: 231.037206px;
        }
        .y5f {
          bottom: 231.037214px;
        }
        .y31 {
          bottom: 232.93615px;
        }
        .y5e {
          bottom: 243.06381px;
        }
        .y80 {
          bottom: 251.292533px;
        }
        .y18 {
          bottom: 267.808296px;
        }
        .y30 {
          bottom: 288.005298px;
        }
        .y16 {
          bottom: 289.329544px;
        }
        .y2f {
          bottom: 303.829766px;
        }
        .y2e {
          bottom: 319.654233px;
        }
        .y15 {
          bottom: 320.978494px;
        }
        .y2d {
          bottom: 335.478701px;
        }
        .y13 {
          bottom: 342.499802px;
        }
        .y7f {
          bottom: 353.835084px;
        }
        .y56 {
          bottom: 367.127637px;
        }
        .y1a {
          bottom: 367.127664px;
        }
        .y7e {
          bottom: 374.723381px;
        }
        .y55 {
          bottom: 379.154232px;
        }
        .y10 {
          bottom: 403.898735px;
        }
        .y2c {
          bottom: 406.430632px;
        }
        .ye {
          bottom: 425.420007px;
        }
        .y2a {
          bottom: 438.079568px;
        }
        .yc {
          bottom: 446.941286px;
        }
        .ya {
          bottom: 468.462534px;
        }
        .y28 {
          bottom: 469.728512px;
        }
        .y4b {
          bottom: 503.218059px;
        }
        .y26 {
          bottom: 511.505093px;
        }
        .y4a {
          bottom: 513.345719px;
        }
        .y12 {
          bottom: 524.739327px;
        }
        .y49 {
          bottom: 524.739335px;
        }
        .y48 {
          bottom: 536.765931px;
        }
        .y24 {
          bottom: 543.154034px;
        }
        .y7 {
          bottom: 561.510403px;
        }
        .y5 {
          bottom: 583.03168px;
        }
        .y3 {
          bottom: 604.552974px;
        }
        .y72 {
          bottom: 610.191461px;
        }
        .y71 {
          bottom: 628.547844px;
        }
        .y1 {
          bottom: 636.201902px;
        }
        .y70 {
          bottom: 662.728694px;
        }
        .y3f {
          bottom: 670.957417px;
        }
        .y6f {
          bottom: 673.489332px;
        }
        .y3e {
          bottom: 681.085077px;
        }
        .y6e {
          bottom: 684.24997px;
        }
        .y9 {
          bottom: 692.478694px;
        }
        .y6d {
          bottom: 695.010608px;
        }
        .y3d {
          bottom: 704.505289px;
        }
        .y6c {
          bottom: 705.771246px;
        }
        .y3c {
          bottom: 722.861672px;
        }
        .y3a {
          bottom: 751.345712px;
        }
        .y3b {
          bottom: 751.345713px;
        }
        .y39 {
          bottom: 764.638266px;
        }
        .y38 {
          bottom: 780.462734px;
        }
        .h9 {
          height: 20.255302px;
        }
        .h5 {
          height: 20.255331px;
        }
        .h11 {
          height: 21.612425px;
        }
        .h13 {
          height: 25.541957px;
        }
        .h3 {
          height: 26.45851px;
        }
        .h7 {
          height: 26.585106px;
        }
        .h10 {
          height: 29.001934px;
        }
        .h12 {
          height: 29.471489px;
        }
        .h4 {
          height: 30.382967px;
        }
        .h2 {
          height: 30.382982px;
        }
        .h8 {
          height: 30.382997px;
        }
        .ha {
          height: 30.383026px;
        }
        .hd {
          height: 31.418761px;
        }
        .hf {
          height: 31.436255px;
        }
        .hc {
          height: 40.510633px;
        }
        .he {
          height: 55.013446px;
        }
        .hb {
          height: 60.76595px;
        }
        .h6 {
          height: 841.861669px;
        }
        .h0 {
          height: 841.91998px;
        }
        .h1 {
          height: 842.5px;
        }
        .w5 {
          width: 176.601029px;
        }
        .w3 {
          width: 186.095735px;
        }
        .w4 {
          width: 270.281912px;
        }
        .w2 {
          width: 279.77659px;
        }
        .w0 {
          width: 594.95996px;
        }
        .w1 {
          width: 595.5px;
        }
        .x0 {
          left: 0px;
        }
        .x1 {
          left: 48.739359px;
        }
        .xd {
          left: 58.234042px;
        }
        .x6 {
          left: 60.765956px;
        }
        .x4 {
          left: 76.155252px;
        }
        .x3 {
          left: 83.07845px;
        }
        .x2 {
          left: 111.700963px;
        }
        .xe {
          left: 120.889046px;
        }
        .x7 {
          left: 130.749662px;
        }
        .x8 {
          left: 142.77626px;
        }
        .x9 {
          left: 255.258564px;
        }
        .xa {
          left: 267.285154px;
        }
        .x5 {
          left: 360.164867px;
        }
        .xf {
          left: 369.659574px;
        }
        .xb {
          left: 392.278665px;
        }
        .xc {
          left: 404.305264px;
        }
        @media print {
          .v0 {
            vertical-align: 0pt;
          }
          .ls0 {
            letter-spacing: 0pt;
          }
          .wsa {
            word-spacing: -12.457021pt;
          }
          .ws2 {
            word-spacing: -12.09373pt;
          }
          .ws5 {
            word-spacing: -11.393617pt;
          }
          .ws7 {
            word-spacing: -11.163443pt;
          }
          .ws6 {
            word-spacing: -9.135149pt;
          }
          .wsc {
            word-spacing: 0pt;
          }
          .ws3 {
            word-spacing: 35.171672pt;
          }
          .ws0 {
            word-spacing: 35.173218pt;
          }
          .ws1 {
            word-spacing: 35.180985pt;
          }
          .ws4 {
            word-spacing: 35.18274pt;
          }
          .ws9 {
            word-spacing: 414.04474pt;
          }
          .wsb {
            word-spacing: 414.073514pt;
          }
          .ws8 {
            word-spacing: 416.101938pt;
          }
          ._2 {
            margin-left: -5.525604pt;
          }
          ._3 {
            margin-left: -3.626196pt;
          }
          ._0 {
            margin-left: -1.806625pt;
          }
          ._4 {
            width: 1.369468pt;
          }
          ._1 {
            width: 46.564695pt;
          }
          ._5 {
            width: 427.915727pt;
          }
          .fs0 {
            font-size: 37.134751pt;
          }
          .fs4 {
            font-size: 40.510637pt;
          }
          .fs1 {
            font-size: 43.886524pt;
          }
          .fs5 {
            font-size: 50.638297pt;
          }
          .fs3 {
            font-size: 54.014183pt;
          }
          .fs2 {
            font-size: 94.524821pt;
          }
          .y0 {
            bottom: -0.666667pt;
          }
          .y8 {
            bottom: 0.077748pt;
          }
          .y65 {
            bottom: 3.375853pt;
          }
          .y58 {
            bottom: 3.375855pt;
          }
          .y54 {
            bottom: 3.375856pt;
          }
          .y50 {
            bottom: 3.375858pt;
          }
          .y52 {
            bottom: 3.375862pt;
          }
          .y7d {
            bottom: 3.375869pt;
          }
          .y45 {
            bottom: 3.375873pt;
          }
          .y5d {
            bottom: 3.375879pt;
          }
          .y63 {
            bottom: 3.375881pt;
          }
          .y42 {
            bottom: 3.375883pt;
          }
          .y79 {
            bottom: 3.375888pt;
          }
          .y67 {
            bottom: 3.375889pt;
          }
          .y4e {
            bottom: 3.375896pt;
          }
          .y47 {
            bottom: 3.375897pt;
          }
          .y5b {
            bottom: 3.375917pt;
          }
          .y1e {
            bottom: 15.191456pt;
          }
          .y14 {
            bottom: 15.191457pt;
          }
          .y11 {
            bottom: 15.191459pt;
          }
          .yd {
            bottom: 15.191461pt;
          }
          .yf {
            bottom: 15.191465pt;
          }
          .y19 {
            bottom: 15.191482pt;
          }
          .y1c {
            bottom: 15.191484pt;
          }
          .y20 {
            bottom: 15.191492pt;
          }
          .y6 {
            bottom: 15.1915pt;
          }
          .y64 {
            bottom: 16.879399pt;
          }
          .y57 {
            bottom: 16.8794pt;
          }
          .y53 {
            bottom: 16.879402pt;
          }
          .y4f {
            bottom: 16.879404pt;
          }
          .y51 {
            bottom: 16.879408pt;
          }
          .y7c {
            bottom: 16.879415pt;
          }
          .y44 {
            bottom: 16.879419pt;
          }
          .y5c {
            bottom: 16.879425pt;
          }
          .y62 {
            bottom: 16.879427pt;
          }
          .y41 {
            bottom: 16.879429pt;
          }
          .y78 {
            bottom: 16.879434pt;
          }
          .y66 {
            bottom: 16.879435pt;
          }
          .y4d {
            bottom: 16.879442pt;
          }
          .y46 {
            bottom: 16.879443pt;
          }
          .y5a {
            bottom: 16.879463pt;
          }
          .y4 {
            bottom: 28.695021pt;
          }
          .y2b {
            bottom: 28.695028pt;
          }
          .y2 {
            bottom: 28.695031pt;
          }
          .y27 {
            bottom: 28.695036pt;
          }
          .yb {
            bottom: 28.695044pt;
          }
          .y17 {
            bottom: 28.695065pt;
          }
          .y7b {
            bottom: 30.382961pt;
          }
          .y43 {
            bottom: 30.382965pt;
          }
          .y76 {
            bottom: 30.382971pt;
          }
          .y40 {
            bottom: 30.382975pt;
          }
          .y77 {
            bottom: 30.382979pt;
          }
          .y4c {
            bottom: 30.382987pt;
          }
          .y59 {
            bottom: 30.383008pt;
          }
          .y29 {
            bottom: 42.198564pt;
          }
          .y7a {
            bottom: 43.886507pt;
          }
          .y75 {
            bottom: 43.886517pt;
          }
          .y74 {
            bottom: 57.390063pt;
          }
          .y6b {
            bottom: 61.609908pt;
          }
          .y23 {
            bottom: 61.609938pt;
          }
          .y25 {
            bottom: 69.205666pt;
          }
          .y73 {
            bottom: 70.893609pt;
          }
          .y6a {
            bottom: 77.645369pt;
          }
          .y37 {
            bottom: 79.333312pt;
          }
          .y69 {
            bottom: 93.680829pt;
          }
          .y36 {
            bottom: 100.432602pt;
          }
          .y68 {
            bottom: 118.156006pt;
          }
          .y82 {
            bottom: 124.907779pt;
          }
          .y21 {
            bottom: 160.43236pt;
          }
          .y35 {
            bottom: 173.858132pt;
          }
          .y1f {
            bottom: 189.127367pt;
          }
          .y34 {
            bottom: 194.957423pt;
          }
          .y33 {
            bottom: 216.056713pt;
          }
          .y1d {
            bottom: 217.822438pt;
          }
          .y81 {
            bottom: 240.53189pt;
          }
          .y1b {
            bottom: 246.517444pt;
          }
          .y61 {
            bottom: 279.354584pt;
          }
          .y32 {
            bottom: 289.482243pt;
          }
          .y60 {
            bottom: 292.85813pt;
          }
          .y22 {
            bottom: 308.049607pt;
          }
          .y5f {
            bottom: 308.049619pt;
          }
          .y31 {
            bottom: 310.581534pt;
          }
          .y5e {
            bottom: 324.085079pt;
          }
          .y80 {
            bottom: 335.05671pt;
          }
          .y18 {
            bottom: 357.077728pt;
          }
          .y30 {
            bottom: 384.007064pt;
          }
          .y16 {
            bottom: 385.772725pt;
          }
          .y2f {
            bottom: 405.106354pt;
          }
          .y2e {
            bottom: 426.205645pt;
          }
          .y15 {
            bottom: 427.971325pt;
          }
          .y2d {
            bottom: 447.304935pt;
          }
          .y13 {
            bottom: 456.666403pt;
          }
          .y7f {
            bottom: 471.780112pt;
          }
          .y56 {
            bottom: 489.503516pt;
          }
          .y1a {
            bottom: 489.503552pt;
          }
          .y7e {
            bottom: 499.631175pt;
          }
          .y55 {
            bottom: 505.538976pt;
          }
          .y10 {
            bottom: 538.531647pt;
          }
          .y2c {
            bottom: 541.90751pt;
          }
          .ye {
            bottom: 567.226676pt;
          }
          .y2a {
            bottom: 584.106091pt;
          }
          .yc {
            bottom: 595.921715pt;
          }
          .ya {
            bottom: 624.616712pt;
          }
          .y28 {
            bottom: 626.304682pt;
          }
          .y4b {
            bottom: 670.957412pt;
          }
          .y26 {
            bottom: 682.00679pt;
          }
          .y4a {
            bottom: 684.460958pt;
          }
          .y12 {
            bottom: 699.652436pt;
          }
          .y49 {
            bottom: 699.652447pt;
          }
          .y48 {
            bottom: 715.687908pt;
          }
          .y24 {
            bottom: 724.205379pt;
          }
          .y7 {
            bottom: 748.680537pt;
          }
          .y5 {
            bottom: 777.375573pt;
          }
          .y3 {
            bottom: 806.070632pt;
          }
          .y72 {
            bottom: 813.588615pt;
          }
          .y71 {
            bottom: 838.063792pt;
          }
          .y1 {
            bottom: 848.269203pt;
          }
          .y70 {
            bottom: 883.638259pt;
          }
          .y3f {
            bottom: 894.60989pt;
          }
          .y6f {
            bottom: 897.985776pt;
          }
          .y3e {
            bottom: 908.113436pt;
          }
          .y6e {
            bottom: 912.333294pt;
          }
          .y9 {
            bottom: 923.304926pt;
          }
          .y6d {
            bottom: 926.680811pt;
          }
          .y3d {
            bottom: 939.340385pt;
          }
          .y6c {
            bottom: 941.028328pt;
          }
          .y3c {
            bottom: 963.815562pt;
          }
          .y3a {
            bottom: 1001.794283pt;
          }
          .y3b {
            bottom: 1001.794285pt;
          }
          .y39 {
            bottom: 1019.517688pt;
          }
          .y38 {
            bottom: 1040.616979pt;
          }
          .h9 {
            height: 27.007069pt;
          }
          .h5 {
            height: 27.007108pt;
          }
          .h11 {
            height: 28.816567pt;
          }
          .h13 {
            height: 34.055943pt;
          }
          .h3 {
            height: 35.278013pt;
          }
          .h7 {
            height: 35.446808pt;
          }
          .h10 {
            height: 38.669245pt;
          }
          .h12 {
            height: 39.295318pt;
          }
          .h4 {
            height: 40.510623pt;
          }
          .h2 {
            height: 40.510643pt;
          }
          .h8 {
            height: 40.510662pt;
          }
          .ha {
            height: 40.510701pt;
          }
          .hd {
            height: 41.891682pt;
          }
          .hf {
            height: 41.915006pt;
          }
          .hc {
            height: 54.014177pt;
          }
          .he {
            height: 73.351261pt;
          }
          .hb {
            height: 81.021267pt;
          }
          .h6 {
            height: 1122.482225pt;
          }
          .h0 {
            height: 1122.559973pt;
          }
          .h1 {
            height: 1123.333333pt;
          }
          .w5 {
            width: 235.468038pt;
          }
          .w3 {
            width: 248.127647pt;
          }
          .w4 {
            width: 360.375883pt;
          }
          .w2 {
            width: 373.035453pt;
          }
          .w0 {
            width: 793.279947pt;
          }
          .w1 {
            width: 794pt;
          }
          .x0 {
            left: 0pt;
          }
          .x1 {
            left: 64.985812pt;
          }
          .xd {
            left: 77.645389pt;
          }
          .x6 {
            left: 81.021275pt;
          }
          .x4 {
            left: 101.540336pt;
          }
          .x3 {
            left: 110.771267pt;
          }
          .x2 {
            left: 148.934617pt;
          }
          .xe {
            left: 161.185395pt;
          }
          .x7 {
            left: 174.332883pt;
          }
          .x8 {
            left: 190.368347pt;
          }
          .x9 {
            left: 340.344751pt;
          }
          .xa {
            left: 356.380205pt;
          }
          .x5 {
            left: 480.219823pt;
          }
          .xf {
            left: 492.879432pt;
          }
          .xb {
            left: 523.038221pt;
          }
          .xc {
            left: 539.073685pt;
          }
        }
      </style>
      <script>
        /*
   Copyright 2012 Mozilla Foundation 
   Copyright 2013 Lu Wang <coolwanglu@gmail.com>
   Apachine License Version 2.0 
  */
        (function () {
          function b(a, b, e, f) {
            var c = (a.className || "").split(/\s+/g);
            "" === c[0] && c.shift();
            var d = c.indexOf(b);
            0 > d && e && c.push(b);
            0 <= d && f && c.splice(d, 1);
            a.className = c.join(" ");
            return 0 <= d;
          }
          if (!("classList" in document.createElement("div"))) {
            var e = {
              add: function (a) {
                b(this.element, a, !0, !1);
              },
              contains: function (a) {
                return b(this.element, a, !1, !1);
              },
              remove: function (a) {
                b(this.element, a, !1, !0);
              },
              toggle: function (a) {
                b(this.element, a, !0, !0);
              },
            };
            Object.defineProperty(HTMLElement.prototype, "classList", {
              get: function () {
                if (this._classList) return this._classList;
                var a = Object.create(e, {
                  element: { value: this, writable: !1, enumerable: !0 },
                });
                Object.defineProperty(this, "_classList", {
                  value: a,
                  writable: !1,
                  enumerable: !1,
                });
                return a;
              },
              enumerable: !0,
            });
          }
        })();
      </script>
      <script>
        (function () {
          /*
   pdf2htmlEX.js: Core UI functions for pdf2htmlEX 
   Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> and other contributors 
   https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE 
  */
          var pdf2htmlEX = (window.pdf2htmlEX = window.pdf2htmlEX || {}),
            CSS_CLASS_NAMES = {
              page_frame: "pf",
              page_content_box: "pc",
              page_data: "pi",
              background_image: "bi",
              link: "l",
              input_radio: "ir",
              __dummy__: "no comma",
            },
            DEFAULT_CONFIG = {
              container_id: "page-container",
              sidebar_id: "sidebar",
              outline_id: "outline",
              loading_indicator_cls: "loading-indicator",
              preload_pages: 3,
              render_timeout: 100,
              scale_step: 0.9,
              key_handler: !0,
              hashchange_handler: !0,
              view_history_handler: !0,
              __dummy__: "no comma",
            },
            EPS = 1e-6;
          function invert(a) {
            var b = a[0] * a[3] - a[1] * a[2];
            return [
              a[3] / b,
              -a[1] / b,
              -a[2] / b,
              a[0] / b,
              (a[2] * a[5] - a[3] * a[4]) / b,
              (a[1] * a[4] - a[0] * a[5]) / b,
            ];
          }
          function transform(a, b) {
            return [
              a[0] * b[0] + a[2] * b[1] + a[4],
              a[1] * b[0] + a[3] * b[1] + a[5],
            ];
          }
          function get_page_number(a) {
            return parseInt(a.getAttribute("data-page-no"), 16);
          }
          function disable_dragstart(a) {
            for (var b = 0, c = a.length; b < c; ++b)
              a[b].addEventListener(
                "dragstart",
                function () {
                  return !1;
                },
                !1
              );
          }
          function clone_and_extend_objs(a) {
            for (var b = {}, c = 0, e = arguments.length; c < e; ++c) {
              var h = arguments[c],
                d;
              for (d in h) h.hasOwnProperty(d) && (b[d] = h[d]);
            }
            return b;
          }
          function Page(a) {
            if (a) {
              this.shown = this.loaded = !1;
              this.page = a;
              this.num = get_page_number(a);
              this.original_height = a.clientHeight;
              this.original_width = a.clientWidth;
              var b = a.getElementsByClassName(
                CSS_CLASS_NAMES.page_content_box
              )[0];
              b &&
                ((this.content_box = b),
                (this.original_scale = this.cur_scale =
                  this.original_height / b.clientHeight),
                (this.page_data = JSON.parse(
                  a
                    .getElementsByClassName(CSS_CLASS_NAMES.page_data)[0]
                    .getAttribute("data-data")
                )),
                (this.ctm = this.page_data.ctm),
                (this.ictm = invert(this.ctm)),
                (this.loaded = !0));
            }
          }
          Page.prototype = {
            hide: function () {
              this.loaded &&
                this.shown &&
                (this.content_box.classList.remove("opened"), (this.shown = !1));
            },
            show: function () {
              this.loaded &&
                !this.shown &&
                (this.content_box.classList.add("opened"), (this.shown = !0));
            },
            rescale: function (a) {
              this.cur_scale = 0 === a ? this.original_scale : a;
              this.loaded &&
                ((a = this.content_box.style),
                (a.msTransform =
                  a.webkitTransform =
                  a.transform =
                    "scale(" + this.cur_scale.toFixed(3) + ")"));
              a = this.page.style;
              a.height = this.original_height * this.cur_scale + "px";
              a.width = this.original_width * this.cur_scale + "px";
            },
            view_position: function () {
              var a = this.page,
                b = a.parentNode;
              return [
                b.scrollLeft - a.offsetLeft - a.clientLeft,
                b.scrollTop - a.offsetTop - a.clientTop,
              ];
            },
            height: function () {
              return this.page.clientHeight;
            },
            width: function () {
              return this.page.clientWidth;
            },
          };
          function Viewer(a) {
            this.config = clone_and_extend_objs(
              DEFAULT_CONFIG,
              0 < arguments.length ? a : {}
            );
            this.pages_loading = [];
            this.init_before_loading_content();
            var b = this;
            document.addEventListener(
              "DOMContentLoaded",
              function () {
                b.init_after_loading_content();
              },
              !1
            );
          }
          Viewer.prototype = {
            scale: 1,
            cur_page_idx: 0,
            first_page_idx: 0,
            init_before_loading_content: function () {
              this.pre_hide_pages();
            },
            initialize_radio_button: function () {
              for (
                var a = document.getElementsByClassName(
                    CSS_CLASS_NAMES.input_radio
                  ),
                  b = 0;
                b < a.length;
                b++
              )
                a[b].addEventListener("click", function () {
                  this.classList.toggle("checked");
                });
            },
            init_after_loading_content: function () {
              this.sidebar = document.getElementById(this.config.sidebar_id);
              this.outline = document.getElementById(this.config.outline_id);
              this.container = document.getElementById(this.config.container_id);
              this.loading_indicator = document.getElementsByClassName(
                this.config.loading_indicator_cls
              )[0];
              for (
                var a = !0, b = this.outline.childNodes, c = 0, e = b.length;
                c < e;
                ++c
              )
                if ("ul" === b[c].nodeName.toLowerCase()) {
                  a = !1;
                  break;
                }
              a || this.sidebar.classList.add("opened");
              this.find_pages();
              if (0 != this.pages.length) {
                disable_dragstart(
                  document.getElementsByClassName(
                    CSS_CLASS_NAMES.background_image
                  )
                );
                this.config.key_handler && this.register_key_handler();
                var h = this;
                this.config.hashchange_handler &&
                  window.addEventListener(
                    "hashchange",
                    function (a) {
                      h.navigate_to_dest(document.location.hash.substring(1));
                    },
                    !1
                  );
                this.config.view_history_handler &&
                  window.addEventListener(
                    "popstate",
                    function (a) {
                      a.state && h.navigate_to_dest(a.state);
                    },
                    !1
                  );
                this.container.addEventListener(
                  "scroll",
                  function () {
                    h.update_page_idx();
                    h.schedule_render(!0);
                  },
                  !1
                );
                [this.container, this.outline].forEach(function (a) {
                  a.addEventListener("click", h.link_handler.bind(h), !1);
                });
                this.initialize_radio_button();
                this.render();
              }
            },
            find_pages: function () {
              for (
                var a = [],
                  b = {},
                  c = this.container.childNodes,
                  e = 0,
                  h = c.length;
                e < h;
                ++e
              ) {
                var d = c[e];
                d.nodeType === Node.ELEMENT_NODE &&
                  d.classList.contains(CSS_CLASS_NAMES.page_frame) &&
                  ((d = new Page(d)), a.push(d), (b[d.num] = a.length - 1));
              }
              this.pages = a;
              this.page_map = b;
            },
            load_page: function (a, b, c) {
              var e = this.pages;
              if (
                !(
                  a >= e.length || ((e = e[a]), e.loaded || this.pages_loading[a])
                )
              ) {
                var e = e.page,
                  h = e.getAttribute("data-page-url");
                if (h) {
                  this.pages_loading[a] = !0;
                  var d = e.getElementsByClassName(
                    this.config.loading_indicator_cls
                  )[0];
                  "undefined" === typeof d &&
                    ((d = this.loading_indicator.cloneNode(!0)),
                    d.classList.add("active"),
                    e.appendChild(d));
                  var f = this,
                    g = new XMLHttpRequest();
                  g.open("GET", h, !0);
                  g.onload = function () {
                    if (200 === g.status || 0 === g.status) {
                      var b = document.createElement("div");
                      b.innerHTML = g.responseText;
                      for (
                        var d = null, b = b.childNodes, e = 0, h = b.length;
                        e < h;
                        ++e
                      ) {
                        var p = b[e];
                        if (
                          p.nodeType === Node.ELEMENT_NODE &&
                          p.classList.contains(CSS_CLASS_NAMES.page_frame)
                        ) {
                          d = p;
                          break;
                        }
                      }
                      b = f.pages[a];
                      f.container.replaceChild(d, b.page);
                      b = new Page(d);
                      f.pages[a] = b;
                      b.hide();
                      b.rescale(f.scale);
                      disable_dragstart(
                        d.getElementsByClassName(CSS_CLASS_NAMES.background_image)
                      );
                      f.schedule_render(!1);
                      c && c(b);
                    }
                    delete f.pages_loading[a];
                  };
                  g.send(null);
                }
                void 0 === b && (b = this.config.preload_pages);
                0 < --b &&
                  ((f = this),
                  setTimeout(function () {
                    f.load_page(a + 1, b);
                  }, 0));
              }
            },
            pre_hide_pages: function () {
              var a =
                  "@media screen{." +
                  CSS_CLASS_NAMES.page_content_box +
                  "{display:none;}}",
                b = document.createElement("style");
              b.styleSheet
                ? (b.styleSheet.cssText = a)
                : b.appendChild(document.createTextNode(a));
              document.head.appendChild(b);
            },
            render: function () {
              for (
                var a = this.container,
                  b = a.scrollTop,
                  c = a.clientHeight,
                  a = b - c,
                  b = b + c + c,
                  c = this.pages,
                  e = 0,
                  h = c.length;
                e < h;
                ++e
              ) {
                var d = c[e],
                  f = d.page,
                  g = f.offsetTop + f.clientTop,
                  f = g + f.clientHeight;
                g <= b && f >= a
                  ? d.loaded
                    ? d.show()
                    : this.load_page(e)
                  : d.hide();
              }
            },
            update_page_idx: function () {
              var a = this.pages,
                b = a.length;
              if (!(2 > b)) {
                for (
                  var c = this.container,
                    e = c.scrollTop,
                    c = e + c.clientHeight,
                    h = -1,
                    d = b,
                    f = d - h;
                  1 < f;
  
                ) {
                  var g = h + Math.floor(f / 2),
                    f = a[g].page;
                  f.offsetTop + f.clientTop + f.clientHeight >= e
                    ? (d = g)
                    : (h = g);
                  f = d - h;
                }
                this.first_page_idx = d;
                for (var g = (h = this.cur_page_idx), k = 0; d < b; ++d) {
                  var f = a[d].page,
                    l = f.offsetTop + f.clientTop,
                    f = f.clientHeight;
                  if (l > c) break;
                  f = (Math.min(c, l + f) - Math.max(e, l)) / f;
                  if (d === h && Math.abs(f - 1) <= EPS) {
                    g = h;
                    break;
                  }
                  f > k && ((k = f), (g = d));
                }
                this.cur_page_idx = g;
              }
            },
            schedule_render: function (a) {
              if (void 0 !== this.render_timer) {
                if (!a) return;
                clearTimeout(this.render_timer);
              }
              var b = this;
              this.render_timer = setTimeout(function () {
                delete b.render_timer;
                b.render();
              }, this.config.render_timeout);
            },
            register_key_handler: function () {
              var a = this;
              window.addEventListener(
                "DOMMouseScroll",
                function (b) {
                  if (b.ctrlKey) {
                    b.preventDefault();
                    var c = a.container,
                      e = c.getBoundingClientRect(),
                      c = [
                        b.clientX - e.left - c.clientLeft,
                        b.clientY - e.top - c.clientTop,
                      ];
                    a.rescale(Math.pow(a.config.scale_step, b.detail), !0, c);
                  }
                },
                !1
              );
              window.addEventListener(
                "keydown",
                function (b) {
                  var c = !1,
                    e = b.ctrlKey || b.metaKey,
                    h = b.altKey;
                  switch (b.keyCode) {
                    case 61:
                    case 107:
                    case 187:
                      e && (a.rescale(1 / a.config.scale_step, !0), (c = !0));
                      break;
                    case 173:
                    case 109:
                    case 189:
                      e && (a.rescale(a.config.scale_step, !0), (c = !0));
                      break;
                    case 48:
                      e && (a.rescale(0, !1), (c = !0));
                      break;
                    case 33:
                      h
                        ? a.scroll_to(a.cur_page_idx - 1)
                        : (a.container.scrollTop -= a.container.clientHeight);
                      c = !0;
                      break;
                    case 34:
                      h
                        ? a.scroll_to(a.cur_page_idx + 1)
                        : (a.container.scrollTop += a.container.clientHeight);
                      c = !0;
                      break;
                    case 35:
                      a.container.scrollTop = a.container.scrollHeight;
                      c = !0;
                      break;
                    case 36:
                      (a.container.scrollTop = 0), (c = !0);
                  }
                  c && b.preventDefault();
                },
                !1
              );
            },
            rescale: function (a, b, c) {
              var e = this.scale;
              this.scale = a = 0 === a ? 1 : b ? e * a : a;
              c || (c = [0, 0]);
              b = this.container;
              c[0] += b.scrollLeft;
              c[1] += b.scrollTop;
              for (
                var h = this.pages, d = h.length, f = this.first_page_idx;
                f < d;
                ++f
              ) {
                var g = h[f].page;
                if (g.offsetTop + g.clientTop >= c[1]) break;
              }
              g = f - 1;
              0 > g && (g = 0);
              var g = h[g].page,
                k = g.clientWidth,
                f = g.clientHeight,
                l = g.offsetLeft + g.clientLeft,
                m = c[0] - l;
              0 > m ? (m = 0) : m > k && (m = k);
              k = g.offsetTop + g.clientTop;
              c = c[1] - k;
              0 > c ? (c = 0) : c > f && (c = f);
              for (f = 0; f < d; ++f) h[f].rescale(a);
              b.scrollLeft += (m / e) * a + g.offsetLeft + g.clientLeft - m - l;
              b.scrollTop += (c / e) * a + g.offsetTop + g.clientTop - c - k;
              this.schedule_render(!0);
            },
            fit_width: function () {
              var a = this.cur_page_idx;
              this.rescale(
                this.container.clientWidth / this.pages[a].width(),
                !0
              );
              this.scroll_to(a);
            },
            fit_height: function () {
              var a = this.cur_page_idx;
              this.rescale(
                this.container.clientHeight / this.pages[a].height(),
                !0
              );
              this.scroll_to(a);
            },
            get_containing_page: function (a) {
              for (; a; ) {
                if (
                  a.nodeType === Node.ELEMENT_NODE &&
                  a.classList.contains(CSS_CLASS_NAMES.page_frame)
                ) {
                  a = get_page_number(a);
                  var b = this.page_map;
                  return a in b ? this.pages[b[a]] : null;
                }
                a = a.parentNode;
              }
              return null;
            },
            link_handler: function (a) {
              var b = a.target,
                c = b.getAttribute("data-dest-detail");
              if (c) {
                if (this.config.view_history_handler)
                  try {
                    var e = this.get_current_view_hash();
                    window.history.replaceState(e, "", "#" + e);
                    window.history.pushState(c, "", "#" + c);
                  } catch (h) {}
                this.navigate_to_dest(c, this.get_containing_page(b));
                a.preventDefault();
              }
            },
            navigate_to_dest: function (a, b) {
              try {
                var c = JSON.parse(a);
              } catch (e) {
                return;
              }
              if (c instanceof Array) {
                var h = c[0],
                  d = this.page_map;
                if (h in d) {
                  for (
                    var f = d[h], h = this.pages[f], d = 2, g = c.length;
                    d < g;
                    ++d
                  ) {
                    var k = c[d];
                    if (null !== k && "number" !== typeof k) return;
                  }
                  for (; 6 > c.length; ) c.push(null);
                  var g = b || this.pages[this.cur_page_idx],
                    d = g.view_position(),
                    d = transform(g.ictm, [d[0], g.height() - d[1]]),
                    g = this.scale,
                    l = [0, 0],
                    m = !0,
                    k = !1,
                    n = this.scale;
                  switch (c[1]) {
                    case "XYZ":
                      l = [
                        null === c[2] ? d[0] : c[2] * n,
                        null === c[3] ? d[1] : c[3] * n,
                      ];
                      g = c[4];
                      if (null === g || 0 === g) g = this.scale;
                      k = !0;
                      break;
                    case "Fit":
                    case "FitB":
                      l = [0, 0];
                      k = !0;
                      break;
                    case "FitH":
                    case "FitBH":
                      l = [0, null === c[2] ? d[1] : c[2] * n];
                      k = !0;
                      break;
                    case "FitV":
                    case "FitBV":
                      l = [null === c[2] ? d[0] : c[2] * n, 0];
                      k = !0;
                      break;
                    case "FitR":
                      (l = [c[2] * n, c[5] * n]), (m = !1), (k = !0);
                  }
                  if (k) {
                    this.rescale(g, !1);
                    var p = this,
                      c = function (a) {
                        l = transform(a.ctm, l);
                        m && (l[1] = a.height() - l[1]);
                        p.scroll_to(f, l);
                      };
                    h.loaded
                      ? c(h)
                      : (this.load_page(f, void 0, c), this.scroll_to(f));
                  }
                }
              }
            },
            scroll_to: function (a, b) {
              var c = this.pages;
              if (!(0 > a || a >= c.length)) {
                c = c[a].view_position();
                void 0 === b && (b = [0, 0]);
                var e = this.container;
                e.scrollLeft += b[0] - c[0];
                e.scrollTop += b[1] - c[1];
              }
            },
            get_current_view_hash: function () {
              var a = [],
                b = this.pages[this.cur_page_idx];
              a.push(b.num);
              a.push("XYZ");
              var c = b.view_position(),
                c = transform(b.ictm, [c[0], b.height() - c[1]]);
              a.push(c[0] / this.scale);
              a.push(c[1] / this.scale);
              a.push(this.scale);
              return JSON.stringify(a);
            },
          };
          pdf2htmlEX.Viewer = Viewer;
        })();
      </script>
      <script>
        try {
          pdf2htmlEX.defaultViewer = new pdf2htmlEX.Viewer({});
        } catch (e) {}
      </script>
      <title></title>
    </head>
    <body>
      <div id="sidebar">
        <div id="outline"></div>
      </div>
      <div id="page-container">
        <div id="pf1" class="pf w0 h0" data-page-no="1">
          <div class="pc pc1 w0 h0">
            <img
              class="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKcAAAaVCAIAAABhzzulAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzdeXyU9b3o8V8yYQ0QEgwkSKvIlgWsoLghIoLihjttPXU9LmAU99YLWrVeK1rrvoAIBwSptlarbWmPoqJUxUokbpAoYFikIBGSACEJyWTuH3NOmmtv7zEVYhje779mnkxe85pvJsl85vk9zyTFYrEAAABAgko2AgAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABUnxEAAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAA1QcAAIDqAwAAQPUBAADQqqQYAfwz5RUVNTU1IYSuaV07dGhvICS8+mi0rKwsOyvLKABA9e2NZs6dN+PJuff+/PYjDzvUNBLeys9Kb5vyi1WlpY1bhg4ZfNWEy/oe0NtwSEjV1TW/+u1zM56cG0Lo07t3wSUXHXrIwSmRiMnA//P3ZdHbi+c+85sQgl8WYI+QFIvFTOF/9MHHyyZcc30IISM9/cVnnvLHfW8o/ONGHnP+OT/Yf7/v1u2sW79hw5ynf71g4evXXVkw7vRTjYgEs/Kz0vMuuzyEMHTI4OFHHjF73tNbysu9yQX/LPmOHXv6Vzb+5aX5XhsArZl9fV9LYdH78QtbystffX3RmFEjzSSBC3/Gk3Ob1l1Kh0jfA3rfftP/Gnb4YbdNuXvwgYPs8SPBrCpdHUKY9sC93xuYH0I4Y+zJp/3w3MdmzFJ98I/++NLLIYSM9PSbbrg2hPDzX96/pbz83cL3/L4Aqm+P16tnz/iFjPT0Qw8ebCAJ7J4HHxl3xmnjTj+1Phr93R/mf7RseQihorJyydKixa/857KSktum/OKpJ6YaFIlkzKiRY0aNrI9GN2zcmJmZmRKJnHnqKTOenLth40bH+MFXzJ73dAjhzltvjr9LctMN115/0y3eJQFaOefw/FoaS+/OW29O79rVQBLVho0bV5WWnnPWGSGEh6ZNnz3v6UH5eYPy85YsLYrf4KIfnbOqtHTDxo0J9sBLPl2xvOSTpls+Xl68YtVnnhItZufOnYvfLXz5tYWfrV7dYne68rPSl15dGL9cH41eN+nmM8+9sKysLISwcNGbIYTMzEw/Gv419fX1by7+a1VV1eq16+a/tGBTWVmCPK5odEt5edMtqampIYSmx4EDqL49VXrXrseNPCaEMPlnd9RHowaSqErXrA0hZGdlVVfXPPu7F++89eZxp5867vRTr7uyoPGZkJAPvOjDj66/6Zbofz+3d+7cee2km5d/8omnRMv4ZMXKs8+76M5773v6t89fMOHK2+++J7r7/86UV1Scd9nlt025uzH5liwtGjpkcGZm5tt/fXdVaeklF5znOCX+Zdurqn7801vnPfvc+eMLHnhs2trP1yfG40qJRPr07h1CmDnnqQ8+XvbBx8vuefCREMLQIdYBAaovIVx+8YUhhC3l5bffdY/wS1TbtlfFL1RUVoQQUjt2jF/t0rlz/EKi/ujHjDp227ZtjcevLl5SWFdXN+rooz0lWkB9ff3k2+84bOjBv/vV3FmPPTz38cfe/uuS3zz/wu6+3+f/MD+EMO2Be5sm331T7kiJRK6/6ZYQwknHjfLT4Rv643++/KuZjy948blDBh+UMA+q4JKLQghLlhZNuOb6CddcH9/Ld/H55/pxA6ovEWRnZU174N4QwoKFr1836ebyioryioqTx51z1U8mJd56v73Wgfm5IYTyiorsrKyM9PSHpk1f+VnpBx8ve2ja9PgNXn19UUjEZW8Z6V0PG3rIgoWvx68uWPj68COP6NQp1VOiBbz3/gd/27Bx4vhL4zvW9t/vuz88+4wX5v95t95pdXXNjCfnDh0y+HsD88vKypomXwhh3BmnzZ0+1RF9fHMXn/+jxgPjE8ahhxyckZ7edEuf3r3jx/gBqL5E8L2B+bdNujGEsGRp0Uln/3DijydtKS9fsrTozHMv/ODjZeaTADIzMzPS02fNezqEMOPh+1eVrj7vsssnXHN9fGHnEaNPuG3K3dddWZCQy95OOn70G2++XVdXV11d8+biv550/HGeDy1jzbrPs7p3b9yfHELIGzBg3fr1u3WR5/oNG0IIw488IoTQNa3rbZNubEy+EMJ1V1zuRLXsEgP69U28B5USiVw14bKmW3589ZV+1oDqSyhjRo2cO31q/E2+poduV1VVGU5i/C+/8EfnPPu7Fz/4eFl2Vtb8Z59+/qnZzz81+6knpj7/1OzbJt04d/rURP28vuFHHB5CeGdJ4aK3F6d27OhctS35rKvdubPplrq6uuTk5OTk3fj3ef/9vpuRnv7i/D+HEDp0aD9m1MhlxSVHjD6h8eQusGteZCQl5suMUccc3bi7LyM9PT83x88aUH2Jpu8BvV985qnbJt0YP547Iz39uisLnK85YYw7/dShQwZPuOb6+x6dGl/qmZ2VtWHjxjffeXfMqJEJvAOkbdu2o48ZsWDhGwsWLjxh9LERp/FoKQP69S2vqGi6ULyw6P0B/fomJSXt7jc4VpWWnnvp5S+9uvCWn9814ZrrfTINNOs3KH75qgmXOe8R0PolxWIxU/iXVVfXdOjQ3hwSz7Mv/H72vKebnp47Iz39qSemJvbndny4bPlVP5kUjUZnPfawBX4t6fJrbwgh3HLjDZmZma8vevP2X/zy9sk3HjP8qN16p/FPpGx8nl9ywXlnjj3ZJ9Owq1RUVp541g+enPZo/759EvUFwNnnXxRCePGZp1QfoPpgT1Ufja5es3ZV6eoQwoH5ufGPrk74Rz3ugn/v0L79nMcf8wRo4dfHd9xz71vvvBtC6NK50/iLLjzz1FNa8nm+b3a2N7BQfQCqD4Dda+u2bdu2be/RPTMlJcU0AADVBwAAwNfibC4AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqg8AAADVBwAAgOrj6/voo4+mTJlSWVlpFAAAgOpLQPPnz588eXJxcbFRAAAAqg8AAADVBwAAQAghhKRYLGYK35Y//elPV1xxRUVFRUVFRVZWVrt27Tp37vzhhx8mJSUZDgAAsEukGMG3qFevXqeccsp77723ePHio446qkePHp06dZJ8AADALmRf37fvrrvumjRp0uLFiw8//HDTAAAAdi3H9QEAAKg+AAAAVB8AAACqj3/4GSQnhxAaGhqMAgAAUH0JKCsrK4RQWlpqFAAAwC7nHJ7fvnXr1vXr1y8jI+P888/v1KnT1Vdf3blzZ2MBAABUX+J44YUXJk+evGLFioaGhpKSkn79+pkJAACg+gAAAPgfOK4PAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAADfRIoR0Pp9uXlzeXlFj+6ZXbp0CSE0NDR8+eXmr9yma9e0tm3bhhBisVhZ2Zf77NMtOTk5hFC7c+f69X9rk5LSq9e+SUlJhgkAwN4mKRaLmQKtVkNDw+w58wqXFmWkp2/esmXsySeedMLx27Zvv/4nk79yy2uuuiIvZ0AIYc3adfc9+Mj990xJTk5esXLV1MdndOuWUbVjR0okcsXll/Xo3t1UAQDYq9jXR6u26M23lhWX3H7rTft067Zi5ar7Hng4Z0C/A3r3nvrw/Y23+duGjXfedU/Wf+fcp5+u6N+3T3xH35NzfzV61MiTTji+oaHhif94cu68Z2649ipTBQBgr+K4Plq1d5e8N2L4sH26dQsh9OvbZ2B+3rtL3gshRJpY8MprBx88JCMjPf4tJZ+uGDCgXwhh85Ytm8rKjjzisBBCcnLy8GFHfFa62kgBAFB90Ips3PhFz+ysxqvZ2VkbNn7R9Aabt2xZUvjemNHHxq82NDSsXLlqQP/+IYSM9PRHH7y3a1pa/Etr163LzsoyUgAAVB+0IjW1tZ07d2682qVL55qa2qY3ePmV1/r37/ed7/SKX12zdl1yJLnXvj1DCElJSW3atIlvX/f5+j/+6aWzzjzNSAEAUH3QikQikYaGhsarDQ2xSOTvT9rt26veemvxmONGNW755NMV/fv1/cq5OjeVlT30yNTjRx8bP90LAACoPmgtuqallZdXNF7dsmVL165pjVdfe/2N7t0z83JzmlZffHlno82bt9z3wCODDzrw1FNOMk8AAFQftC69eu27es2axqtr132+b8+e8cu1tbWvvb6o6Y6+aDS6ctWqAf37Nm4pLy+/98GH8/Nzz/nBOMMEAED1QatzzNFHvfn2O8uLSxoaGt58a3Hp6jXDjjg8/qVFb77drl3bQw4e0njjNWvXtmnTtmd2dvxqRWXlvQ88sm929tiTT9y6dVtl5dbKyq310aipAgCwV/F5fbRqA/r3O23syY9Ne6Kuvr5Dh/YXXXBufIVnfTT6ymsLR488JhKJNN645JMVA/r//aC+V15duKmsbFNZ2QeTPm68zY+vu7pf3z4GCwDA3iMpFouZAq1cXV3dtm3bu6R1SWnSeP/o/oceHXzQgcccPdzEAACgkX197AHatGnT+CHs/x8D+vc7cOBA4wIAgKbs6wMAAEhkzuYCAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAACA6gMAAED1AQAAoPoAAAD4dqQYQXNFo9HlxSUhhLzcnEgkYiAAAIDqSyiFS4tmzpoTQphYMH7QwHwDAQAAWjMrPJutqmqHIQAAAHsK+/qabcTwYSGE1NSOebk5pgEAALRySbFYzBQAAAASlRWeAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAqD4AAABUHwAAAKoPAACAb0eKETRXNBpdXlwSQsjLzYlEIgYCAACovoRSuLRo5qw5IYSJBeMHDcw3EAAAoDWzwrPZqqp2GAIAALCnsK+v2UYMHxZCSE3tmJebYxoAAEArlxSLxUwBAAAgUVnhCQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAgOoDAABA9QEAANCapRgBANDCotHo8uKSEEJebk4kEjEQANXnHxUAJJTCpUUzZ80JIUwsGD9oYL6BAKg+/6gAIKFUVe0wBADV5x8VACSsEcOHhRBSUzvm5eaYBsDulhSLxUyhWaLR6Bt/eSs1teMhQwZb4QkAAKg+AAAAvjU+uQEAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAADgm0sxguaKRqPLi0tCCHm5OZFIxEAAAADVl1AKlxbNnDUnhDCxYPyggfkGAgAAtGZWeDZbVdUOQwAAAPYU9vU124jhw0IIqakd83JzTAMAAGjlkmKxmCkAAAAkKis8AQAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAADwz6UYAQDQwqLR6PLikhBCXm5OJBIxEADVBwAklMKlRTNnzQkhTCwYP2hgvoEA7FZWeAIALa2qaochALQY+/oAgJY2YviwEEJqase83BzTANjdkmKxmCkAAAAkKis8AQAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABUHwAAAKoPAAAA1QcAAEBrkWIE7FqxWGz93zbU1NR8p9e+7dq1a/qlbdu2fbGpLC2tS+Y++zTdXldXt+7zzyORlO/02jc52TsRAACg+mittm7d+uAj077cvLlDh/bV1TWXXXxhfl5u/EuvLnzj93+Y37Nn9hdfbOrde//xl1zUtm3bEMKKlaumTZ8ZiUTq6+tTU1OvmVjQrVuGSQIAwK6SFIvFTIFd5fEZs7Zv335lwfh2bdv++aUFL7/y6l13/Kxdu3abN2+5+bb/fd3VV/br26eqquque+4/dOjBY08+sT4anfzTnx126CFnnjY2Go0+/sR/1NXXXzOxwCQBAGBXsZqOXWbnzp3vf/DhySeOade2bQhhzHGjYrGwvLgkhPDpipXdumX069snhJCamjpk8Pc+K10dQli5ctX27dvHnnRCUlJSSkrK2FNOXF5csn17lWECAMCuYoUnu8yXX26ORqM9e2b/1zsKyck9unffsPGLwSEcdughQw8Z0njLtes+z87qEULYsHHjPvt0iy/1DCFkZ2WFEDZ+8UXfTgeYJwAA7BL29bHL1NTWhhC6dO7cuKVLl841NTXxAkxJ+a+3GP7y1tulq1efMOa4EEJtbW3T27dp06ZD+/a1tbWGCQAAqo9WJxKJhBAaGhoatzQ0NMQ3Nnr/w4+e+c1zl/77hfHYiyRHmt4+hNAQ++q3AAAAqo9WoWtaWghhS3l545Yt5eXxjXHLlhfPmDn7gnP/rfHEnmld05refseOHbW1O9OafAsAAKD6aC26dOncuXPn1WvWxq/W1NRs2lTWeJhfccknU6fPPPfffnjo0IMbv6XXvj3LyysqK7fGr65Zu65du7bdMtINEwAAVB+tTlJS0jFHH/XCi3/cVFZWV1f3698+v88+3eLn7fx0xcpHp04/+cQxuTkDKiu3VlZu3bp1awihZ3Z2v7595j3z6+rq6srKrc+98PsjDjus8eQuAADALnih7vP62IXq6upmz51X+F5RCKF7Zub4Sy7q1WvfEMKdd/+ycR9gYyI+/uiDIYQvN2+ePmPWmrXrYrFYXm7OZZdc1LFDB5MEAADVR+u1o7q6tra2a1paUlLS1/yWrVu3JidHOnVKNT0AAFB9AAAAfF2O6wMAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACqDwAAANUHAADAnijFCACAFhaNRpcXl4QQ8nJzIpGIgQCoPgAgoRQuLZo5a04IYWLB+EED8w0EYLeywhMAaGlVVTsMAaDF2NcHALS0EcOHhRBSUzvm5eaYBsDulhSLxUwBAAAgUVnhCQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAUH0AAACoPgAAAFQfAAAA37YUI2iuaDS6vLgkhJCXmxOJRAwEAABQfQmlcGnRzFlzQggTC8YPGphvIAAAQGtmhWezVVXtMAQAAGBPYV9fs40YPiyEkJraMS83xzQAAIBWLikWi5kCAABAorLCEwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAAA0lWIEAECC+Wz16vr66AH77/fOkvdqamoG5uVm9ehuLIDqAwBIEM//fn5FZWV5RcXGTZs6tG+/es3aqyZc9v0zTzcZQPUBALSEaDS6vLgkhJCXmxOJRHbHXbz6xqKrxl96zriz4pd/eseUgw4c1L9vH8MH9kKO6wMAWlrh0qKHH3v84ccej7ff7tCje+YPzjojfnnUiKMH5ef9+ZVXTR5QfQAALaGqasfuvove+303Ofnvr3P69zng88/Xmzywd7LCs9laYFEKACS2EcOHhRBSUzvm5ebspruo3Vn3f12t3RlJ8bIHUH18PYVLi2bOmhNCmFgwftDAfAMBgOaKRCLHHnP0br2LT1eu3FFd3bFDhxBCQ0PD0g8+PPH40SYP7J2s8Gy2FliUAgB8Q7GG2B07rlAAACAASURBVJR7H9hSXrGjuvrBqdPLKyrGnnC8sQB7J/v6mq0FFqUAAN/QwYMPyurR/ZTvnxOLxbJ69Ljnjp91z8w0FkD18bW0wKIUAOCbu+LSi3/0/bOrq6t7dO/e9MwuAKoPACBBdE1L65qWZg7AXs77XgAAAIksKRaLmQIAkEi2bd/eEG1IS+tiFACqDwAAIMFZ4QkAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAAD2dilG0FzRaHR5cUkIIS83JxKJGAgAAKD6Ekrh0qKZs+aEECYWjB80MN9AAACA1swKz2arqtphCAAAwJ7Cvr5mGzF8WAghNbVjXm6OaQAAAK1cUiwWMwUAAIBEZYUnAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAAC+iRQjAABaWDQaXV5cEkLIy82JRCIGAqD6AICEUri0aOasOSGEiQXjBw3MNxCA3coKTwCgpVVV7TAEgBZjXx8A0NJGDB8WQkhN7ZiXm2MaALtbUiwWMwUAAIBEZYUnAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAsPdIMYLmikajy4tLQgh5uTmRSMRAAAAA1ZdQCpcWzZw1J4QwsWD8oIH5BgIAALRmVng2W1XVDkMAAAD2FPb1NduI4cNCCKmpHfNyc0wDAABo5ZJisZgpAAAAJCorPAEAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKg+APg/7d17dJv1neDhn2xFcmTkOI5zsRNw0tzsXAgJEEpDGi7lsByW0nZ6pnMGZjulTNOyw06HM2V3u6VbbnPaLS2H7bRAS064tDsz3ZZTynS2w5RbWwLDJQEGcg+527HjxLGNhaVY0v4hUJ2QhJhAIjnP89f7yrL0+vsqjj56X8kAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAKD6oJTl8/kdO1s3bno9nU4f9KXe3t6Nm17f3dlpSgAAEDUCylFPT8+df3d35549I0dWvflm/xc+/+ezZ7UUvvTYE0/98pFfNTY2tLd3TJkyeek1n4vFYiYGAIDqg3Ly9z/9eSIx8n/9zS3xWOz//cu/3rv8/m/eelM8Ht+zZ+/PHvrF9X/1l9OnTe3r6/vmt+/4l3997PLLLjUxAABOWs7wpPxkMpmXXn7lsksvicdiIYRLLr4onw+r16wNIazfsHHMmLrp06aGEKqrqxfMn/f65i0mBgDAycyxPspPZ+eebDbb2NhQWK2oqBg/blzbrvb5IZyz8Kyzz1pQvOa27TsaJow3MQAATmaO9VF++tPpEEJNMlm8pKYm2d/fXyjAaPSt1zJ+9/SKzVu2/IdLLjYxAABOZo71UYpe37z5h8vuK67+9XX/efz4ccXVysrKEEIul6uoeOtli1wuV7iw6KVX/v0ffvrza5deMzgOAQBA9UFJaGxo+OJffL64Wlc3evBXa0eNCiHs7eqqHzOmcMnerq7T58wuXuG11WvuXXbfZ6/60+IHewIAgOqDElJVVTW56bTDfbWmJplMJrds3Vaovv7+/o6O3cW3+a1Zu+6uHy676k//ZOHZZ5okAAB4Xx/lJxKJnP/R837x8D917N69f//+f/zZQ/X1Ywqf27l+w8bv3/XDyy69pKV5Znd3T3d3T09Pj4kBAHBSP3/O5/OmQNnZv3//fQ/+5IUXV4UQxo0du/Saz02aNDGE8Lffun3L1m0HJeI937/TxAAAUH1QflJvvplOp2tHjYpEIqYBAACqDwAA4KTjfX0AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAADVBwAAgOoDAACgPESNYKiy2ezqNWtDCLNamisrKw0EAABQfcPKCytXLVv+QAjhumuXzp0z20AAAIBS5gzPIevrSxkCAABQLhzrG7IlixeFEKqrE7Namk0DAAAocZF8Pm8KAAAAw5UzPAEAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAACA6gMAAN6rJ554oqqqqqqq6rjd4+233171tpEjR9bV1S1atOgnP/mJfXEyixoBAAB8QLLZbDqdPp73ODAwkE6nI5FILBbL5/NdXV0rVqxYsWJFe3v79ddfb4+cnBzrAwCA4yqXy3V1deVyuUN+NZ/Pd3d3H+NdzJgxo7+/v7+/f9++fZ/5zGdCCDfffPPAwIDhqz4AAGBostlsNBqNRqNPPfVU4ZKlS5dGo9Err7zynVfetGnTJz7xicKJl3V1dV/+8pczmczgG7nnnnuamppqa2u//e1vvy+bN2rUqK9+9ashhO7u7h07dthfJydneAIAwHuXz+ez2WxhodiBBQdds7e3d/HixW1tbZMnT545c+Zjjz125513RiKRO+64o3gjN9xwQ09PTwjh8ssvf7+2sBh7tbW19pfqAwA4Se3Y2bpx0+shhGlTPzRpYmOJbFUul1u9Zm1rW1symZw3d04ikSiLYabT6Q0bN23esnXK5KbmmTOi0Q/2CefevV2vvPpaJpOePm3alMlNpTyZnTt3XnHFFb29vffee29VVdU3vvGNm2666ZFHHrnjjjuK15k0adKvf/3r2traZDJ5yBvZvGXr1m3bQwgtzTPGjxt3uPvat2/f3XffHULYtWtXYeHiiy8+sdVX/Fd25C1H9QEAvP96enpXvfRyYXnVSy8nRo6sqxtdChu2es3azVu2hhDS6T2/X/HMhecv+aAL6n3xzL8939vbW+iT3jfeOPechR9oYT79zLOF5VdfWz1ixIjSifZ3am5uvuuuu7q7u1esWLFu3bpHH320kGeDr/O1r33t1FNPPdwttHd0vPra6sLyc8+/eNEFSw73WkB7e/uXvvSl4urpp59+3333ncCffe/eruK/sueef3HJ4vNqapJ++ag+AIDjZM/evYNXW9vaSqT6Csn3dt5kMplM6VdfKpUqJF9BZ+eeD/Tudh94++0dHaVcffl8/itf+cr3v//9/v7+EEI8Hn/ndRoaGo5wCzt2th6QUl37Dld9Y8aM+eIXv7h///7bb789l8tdf/31jY0ncjKbt24dvNrT26v6jief5gIAnOxGjBgxeLW6urpENuygc/wqKytLf5gH/WG6eDz2gd5dYuTIA+4uFjv+P3JFxVvPqItv5DvcJ3Def//93/nOdxKJxIMPPrhx48bvfe97Q72vUw58cI4YcdhXAerr62+99dZvfetbn/70p0MIt9122zvfZ3g81Y0efZRbjuoDAHj/NTZMqK8fUwytptNOLZENW3DGvGI1zZg+7ZCHhkruyWVFxfwz5hVXz1qw4INtibrRxX0Xj8emT5t6Qn7k0aNHhxAKn+HZ0dHx2GOPHfKaq1atCiFcdNFFV1111dSpU9esWTPU+5r6oSnFh0R9/Zix9fXv+i033nhjJBLZsGHDif1D7adOmlh8FeMot5z3kcgesmw2u3rN2hDCrJbmsnjJDQB412ft556zMJVKhRCqqqqKh25OuJqa5IXnL8lkMpWVlWWRfAWTJjaOrR+TzWZjsdhxOCW1FPbdxz/+8fvvv/+WW2555JFHtm7derhjfXPmzAkhPPzww1dffXVXV9cvf/nLIT93j0Y/duEFhRNEj/LTfebMmfPJT37yoYceuuWWW6688soT9fQ1Go1+9LyPDGnLeT9/yxnBUL2wctX3fnDP935wT6H9AIDhIZFIJBKJ0km+4nPlRCJRRslXEI/HE4nEcXsX4gnfd9/97ncvvfTSSCTy8ssvn3vuuTfccMMhr3b11Vdfc8012Wx2+fLlzz777E033fTeXqQo/LxH/y033nhjCGHjxo0//vGPT2R4DH3Leb9Ein9XhKP0+JO//Yef/iyEcN21S+fOmW0gAACEEHp6eiKRyOH+4kLRvn37Ojs7m5qaDnpDKai+EpLNZp/63dPV1YmzFsx3hicAAKD6AAAAOGG8rw8AAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABQfQAAlLGBgYFUKpVOp43iPUun06lUKpfLGcVBUqlUKpUyhzISNQIAgGGmp6f32eeeS6czIYT5Z8ybNLHRTIZq3foN6zdsDCHE47Eli8+Lx+NmEkLI5XK//f2K3t7eEEJ9/Zhzzj6rosJhpDJgJwEADDcrX3q5kHwhhFUvveyI31Cl0+lC8oUQ0unMq6vXmEnB1m3bC8kXQujs3LO7s9NMVB8AACdA8Xl5QTabNZMhVl9m8OqePXvMpGBvV9fg1f37B8xE9QEAcAJMmdxUXI7HY7FYzEyGJJEYOXi16bTTzKTgoLOFa5JJM1F9AACcALNamhsbG0IIyWTywwsXRqM+ymFootHoksXnJZPJQkJPnzbVTArGjxs3Z/aseDwWj8fmnzGvpkb1lYdIPp83BQAAgOHKsT4AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAANUHAACA6gMAAED1AQAAUCqiRjBU2Wx29Zq1IYRZLc2VlZUGAgAAqL5h5YWVq5YtfyCEcN21S+fOmW0gAABAKXOG55D19aUMAQAAKBeO9Q3ZksWLQgjV1YlZLc2mAQAAlLhIPp83BQAAgOHKGZ4AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAIDqAwAAoFREjQAA4L3p6elt27Wrurq6sWFCRYUX099FOp1ubdsVQhg/bmwikTjJp5FKpdo7docQGhsmxONxD4+DDAwMbN+xM5PJnDppokfLsYvk83lTAAAYqvaOjueef7GwnEwmP3reR4TfkZPv0d88Xly96IIlJ/NT+VQq9dgTTxWW4/HYhecviUYdjDkg+R5/8ql0OlNYXbL4vJqapLEcC7+bAADei9c3byku9/b2vvFGn5kcQeEoX9H2HTs9eN7u4cyu9g6PkMF2tXcUky+EsGHTJjNRfQAAAKg+AID31YemTC4uJ5PJU06pNpMjaGyYMHj11EkTPXgK4vHYhPHjPEIGmzB+XDweK65OnzrVTI6R9/UBALxHPs1lSHyay2A+zeXIfJqL6gMAAOBoeVEKAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAE5WUSMYqmw2u3rN2hDCrJbmyspKAwEAAFTfsPLCylXLlj8QQrju2qVz58w2EAAAoJQ5w3PI+vpShgAAAJQLx/qGbMniRSGE6urErJZm0wAAAEpcJJ/PmwIAAMBw5QxPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAADg5BA1AoaNN97oy+dzyWQyhJDP53fsbM1kMqdOmhiLxQZfra+vr7VtV01Ncvy4cYMvz+fzuzs7x9bXRyIRwwTgCFKp1Jp160MIdaNHN512akWFl9EPrb2jY8fO1hDCpImNB/23W7JyudzWbdv3dnWFEFpmzkgkEvZjQTqd3rBxUzqTOaW6evq0qR72qg9OjPse/MnM6dMu/tiF3d09d/7dDzKZ/VVV8c49ez73n66ad/rcwnUef/K3P3voF6NH13bv625paf7C5/98xIgRhS89/Miv/vnXj/7v7367qipumAAczsDAwO9XPJNOZ0IIra1tIYQpk5uM5Z16enqfe/7FwnJra9uSxefV1CRLf7O3btv+6murC8t79uy58Pwl0agnzCGE8My/Pd/b21tYfqOv78z5Z5hJGdHoDBO5XG7Dxk0zZ04PITz8T7+qqam55Rtf+9p/v+GKyy+7d/kD/f39hf9y/vH//vxLX/j8bTd9/dabv75jx87fPP5kCOH1zVtuuu2bv1/xjDEC8K727N1bSL6CXe3tZnJI27ZvPyAC3w6G0q++4nI6nenp6bUrQwipVKp30B4svN6B6oPjbfuOHZFImDRxYghhzdp1H/nwOYUTNc/7yLmZTKa1bVcI4fkXV06b+qG5c2aHEGpHjbrwgiXPvfBiCKGmJvmpKy7/m7/+L8YIwLsaWTVy8OpB7yOgqLq6uhw3Ox4/YIc6A8jjXPVBCVm7bsOM6dMKp5jf/PX/cdaZ89+uwZ0VFRVjx9aHENp2tTc2NBS/pbFhwq62XSGE+jFj5s6Z7fwNAI5GTU2yvn5McbVl5gwzOaRTJ00sFlQ8HmtsmFAWmz27peUPTxUaG7yvryAajc6YPq24uvDsM82kzPagETA8rFu/Yfast35NF9+ql3rzzft//H8uufii5CmnhBDS6fTg/3JqkslsLrd///7i9QHgaJx7zsKent43+98cU1fnRcMjdMLHLrxg377uEEJt7ahy+fCPmprkpZdcvGfv3pFVI8vijYjHzcwZ0yc3nba7c8/Y+jHxuEOgqg+Ou8Kb+j71iY8PvjCTyfzg7h/Vjqr5j5ddWriksrIyl8v94bvyucKFBgjAe2gDSfCuKioq6upGl2Ovlssnjh5n8Xh80sRGcyjLf4xGwDCwZeu2EdHoxMY/nL25f//+H9xz7/79+7/0hWuib3dd7aiarq59xevs3duVTCZ97jAAAKoPSt269RtmTJ9W/Dt7AwMDd/9oWSqV+qvrrq2qqipebdKkiVu2biuubt22fXAoAgCA6oPSrb7C32wIIWSz2R8uW76rveNzn/2z/Zn93d093d096XQ6hHDO2Wd17dv3z79+NJvNbtm67Yknf7tk8SLTAwBgePO+PsreQDa7cdPrf/zpTxZWV69Z+9LL/x5C+J8331a8zhWXX3bZpZeMHDnyi39x9fIHfvzwI7+qiEQuvGDJmQvmGyAAAMNbJJ/PmwJlbeOm1+/64bLvfOu2o7x+Lpfr7u4eOTLhL/AAAHAycKyPsldRUfFHn/z4kK4/evRocwMA4CThWB8AAMBw5tNcAAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqg8AAADVBwAAgOoDAABA9QEAlL6BgYF0Om0O75ROpwcGBoblHi/xnyuXy6VSKY9AjkbUCAAAjmzd+g3rN2wMIdTXjzn7zAXRqGdQb3XR8y+u7OzcE0KYMX3azBnTh8fPlcvlVr38SmtrWwihsbFh/rzTKypK7kjJ3r1dTz/zbAghHo99eOHCmpqkByRH4FgfAMCR9PT0FpIvhNDZuWftuvVmUrB23fpC8oUQ1m/Y2NPTOzx+rt2dnYXkCyG0trbt7uwswS4tJF8IIZ3OPPvccx6NqD4AgGOovt4DYiadyZjJIUdx0KDK17593UdYLQX9/f0H7Ii0xySqDwDgGNSNrh28ekp1tZkcchQHDap81daOOsJqKUgkEvF4rLiaTDq9E9UHAHBsz7DnnzGvsNzY2DB92lQzKZg+bWpjY0Nhef4Z8xKJxPD4ucaPGzdlclNhecrkpvHjxpXgRn544cJC+CWTyXPPOdujkSOL5PN5UwAAABiuHOsDAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAJ7uoEQxVNptdvWZtCGFWS3NlZaWBAAAAqm9YeWHlqmXLHwghXHft0rlzZhsIAABQypzhOWR9fSlDAAAAyoVjfUO2ZPGiEEJ1dWJWS7NpAAAAJS6Sz+dNAQAAYLhyhicAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABQfQAAAKg+AAAAVB8AAACqDwAAgOMlagRDlc1mV69ZG0KY1dJcWVlpIAAAgOobVl5YuWrZ8gdCCNddu3TunNkGAgAAlDJneA5ZX1/KEAAAgHLhWN+QLVm8KIRQXZ2Y1dJsGgAAQImL5PN5UwAAABiunOEJAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAqD4AAACGg6gRAAAcZPOWra++tjqEMGVy06yW5ooKL5SXyu6YM3tWeW383r1dL6xcmU5n6uvHLDhjXjweHzb7JZfLrXr5ldbWtng8dtaCBXV1oz1WS5ZfYQAABz9NLzRGoTda23aZSensjvaOjjLa+IGBgaefeTadzoQQOjv3bNi4aTjtmtVr1ra2toUQ0unM0888m06nPVxVHwBAeUi9+ebg1fLKjOGnu6dn8Oru3Z1ltPGZTGbw6uYtW4fTrmltaxu82teX8nBVfQAA5WHEiAPeAlM32nlrJ1IiMXLw6tix9WW08ZWVlYNX6+vHDKdd09jQMHi1ujrh4ar6AADKw/hx46ZMbio+TW867VQzOYHG1tc3Nr5VF42NDWPry6n64vH4/DPmvb0cW/D28vAwfdrUZDJZWJ4ze9Zwesvi8BPJ5/OmAABwkIGBgWw264lsiSi8Z6xMd0cul+vv708khuehsFQqFYvFolEfEqn6AAAAOEGc4QkAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAoPoAAABQfQAAAJSXqBEMVTabXb1mbQhhVktzZWWlgQAAAKpvWHlh5aplyx8IIVx37dK5c2YbCAAAUMqc4TlkfX0pQwAAAMqFY31DtmTxohBCdXViVkuzaQAAACUuks/nTQEAAGC4coYnAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAIDqAwAAQPUBAACg+gAAAFB9AAAnk1wut3dvV09Pby6XM40TKJVKtXd0DAwMGMWxGxgYaO/o6OnpNYoSFzUCAIDj8OT48SefSqczIYRkMvnR8z5SUeHF9xNg3foN6zdsLCwvOvfDdXWjzeQ96+npfep3vy8s6HVWfwAACB9JREFUNzY2nDn/DDMpWX7dAAB84Lbv2FlIvhBCb29va9suMzn+0ul0MflCCK+8+pqZHIsNmzYVl1tb21KplJmoPgCAk1dfX58hnHDZbHbwam+v8xKPSW/vG4NX+/vTZqL6AABOXo0NDYNX60bXmsnxV1VVFY/Hiqszpk8zk2PRdNqpxeV4PFZTkzSTkhXJ5/OmAADwQWvv6Hh985ZYLDalqcnbyU6UdDq9YeOm3jfeqBs9evq0qd5deSxyudzWbdu3btueTJ7SMnNGIpEwE9UHAADACeDlDQAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAODkETWCocpms6vXrA0hzGpprqysNBAAAED1DSsvrFy1bPkDIYTrrl06d85sAwEAAEqZMzyHrK8vZQgAAEC5cKxvyJYsXhRCqK5OzGppNg0AAKDERfL5vCkAAAAMV87wBAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAgJNR1AgAABgslUq1d+wOITQ2TIjH4wbCQXK5XGvbrr6+voYJE2pqkgZS+iL5fN4UAAAoJt9jTzxVWI7HYxeevyQadZyAA5LvN48/kU5nCqsLzz5z/LhxxlLinOEJAMAfvL55S3E5nc7sau8wEwbbt6+7mHwhhB07W81E9QEAAKD6AAAoDR+aMrm4HI/HJox38h4HqK0dFY/HiquTJjaaSenzvj4AAA6QSqW279gZi8V8mguHNDAwsH3Hzkwm49NcVB8AAAAnnjM8AQAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACg+gAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAUH0AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAA1QcAAIDqAwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAgOoDAABA9QEAAKD6AAAAUH0AAACoPgAAAFQfAACA6gMAAED1AQAAoPoAAABQfQAAAKg+AAAAVB8AAACqDwAAQPUBAACg+gAAAFB9AAAAqD4AAABUHwAAAKoPAAAA1QcAAKD6AAAAUH0AAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABQfQAAAKg+AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAqD4AAABUHwAAAKoPAAAA1QcAAIDqAwAAQPUBAACoPgAAAFQfAAAAqg8AAADVBwAAgOoDAABA9QEAAKD6AAAAVB8AAACqDwAAANUHAACA6gMAAED1AQAAoPoAAABQfQAAAKoPAAAA1QcAAEBJixgBAMNaRW00hBBCfpBUCOHeigMvezc/qgjhnsN8zy8OuvzPjvK2L6kI4e8Pcd1nB102KjK07czn8/k/fuv75x9mOxoqQ/jVYb724BDnctOg63/3oO/9y8Pc1gUHXf6bIdzndypCaKp85/X/a0UItx3F7cwY4s/3qYoQDvc9nzro8nlHedtfj4TwR4e47mcHXbYvDH2/5/P5fGTQbXQf5jb+W2UIVx1hW897DzMq3vZBj9eBd3n83nrQ1/9kCPfdXBHC5MpDX396xXubHwxb/x+SCg5mXVgFWgAAAABJRU5ErkJggg=="
            />
            <div class="c x1 y1 w2 h2">
              <div class="t m0 x0 h3 y2 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 y3 w2 h4">
              <div class="t m0 x0 h3 y4 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 y5 w2 h5">
              <div class="t m0 x0 h3 y6 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 y7 w2 h5">
              <div class="t m0 x0 h3 y6 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x0 y8 w0 h6">
              <div class="t m0 x2 h7 y9 ff2 fs0 fc0 sc0 ls0 wsc">
                07<span class="_ _0"></span>/2021 - Ongoing
              </div>
            </div>
            <div class="c x1 ya w2 h8">
              <div class="t m0 x0 h3 yb ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 yc w2 h9">
              <div class="t m0 x0 h3 yd ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 ye w2 h9">
              <div class="t m0 x0 h3 yf ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 y10 w2 h9">
              <div class="t m0 x0 h3 y11 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x0 y8 w0 h6">
              <div class="t m0 x3 h7 y12 ff2 fs0 fc0 sc0 ls0 wsc">
                02/2020 - 07<span class="_ _0"></span>/2021
              </div>
            </div>
            <div class="c x1 y13 w2 h9">
              <div class="t m0 x0 h3 y14 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 y15 w2 h5">
              <div class="t m0 x0 h3 y6 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 y16 w2 ha">
              <div class="t m0 x0 h3 y17 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 y18 w2 h5">
              <div class="t m0 x0 h3 y19 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x0 y8 w0 h6">
              <div class="t m0 x3 h7 y1a ff2 fs0 fc0 sc0 ls0 wsc">
                12/2019 - 02/2020
              </div>
            </div>
            <div class="c x1 y1b w2 h5">
              <div class="t m0 x0 h3 y1c ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 y1d w2 h5">
              <div class="t m0 x0 h3 y1e ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 y1f w2 h5">
              <div class="t m0 x0 h3 y20 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x1 y21 w2 h5">
              <div class="t m0 x0 h3 yf ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x0 y8 w0 h6">
              <div class="t m0 x4 h7 y22 ff2 fs0 fc0 sc0 ls0 wsc">
                05/2019 - 06/2019
              </div>
              <div class="t m0 x1 h7 y23 ff2 fs0 fc0 sc0 ls0 wsc">
                08/2017 - 03/2020
              </div>
            </div>
            <div class="c x5 y24 w3 hb">
              <div class="t m0 x0 h3 y25 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x5 y26 w3 h8">
              <div class="t m0 x0 h3 y27 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x5 y28 w3 hc">
              <div class="t m0 x0 h3 y29 ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x5 y2a w3 h4">
              <div class="t m0 x0 h3 y2b ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x5 y2c w3 h8">
              <div class="t m0 x0 h3 y2b ff1 fs0 fc0 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
            </div>
            <div class="c x0 y8 w0 h6">
              <div class="t m0 x5 hd y2d ff3 fs1 fc1 sc0 ls0 ws0">
                HTML<span class="_"> </span>CSS<span class="_"> </span>SCSS<span
                  class="_"
                >
                </span
                >JS<span class="_"> </span>Angular<span class="_"> </span>Rea<span
                  class="_ _0"
                ></span
                >ct
              </div>
              <div class="t m0 x5 hd y2e ff3 fs1 fc1 sc0 ls0 wsc">
                Jest &amp; Enzyme<span class="_ _1"> </span>Storybooks<span
                  class="_ _1"
                >
                </span
                >Bootstrap
              </div>
              <div class="t m0 x5 hd y2f ff3 fs1 fc1 sc0 ls0 ws1">
                Material<span class="_"> </span>T<span class="_ _2"></span
                >ypescript<span class="_"> </span>W<span class="_ _0"></span
                >ebpac<span class="_ _0"></span>k<span class="_"> </span
                >Snowpac<span class="_ _0"></span>k
              </div>
              <div class="t m0 x5 hd y30 ff3 fs1 fc1 sc0 ls0 ws2">Vite</div>
              <div class="t m0 x5 hd y31 ff3 fs1 fc1 sc0 ls0 ws3">
                NodeJS<span class="_"> </span>Expres<span class="_ _0"></span
                >sJS<span class="_"> </span>Redis<span class="_"> </span>R<span
                  class="_ _0"
                ></span
                >abbitMQ
              </div>
              <div class="t m0 x5 hd y32 ff3 fs1 fc1 sc0 ls0 ws4">
                MySQL<span class="_"> </span>MongoDB<span class="_"> </span
                >Python<span class="_"> </span>J<span class="_ _0"></span>ava<span
                  class="_"
                >
                </span
                >O<span class="_ _3"></span>AS
              </div>
              <div class="t m0 x5 hd y33 ff3 fs1 fc1 sc0 ls0 wsc">
                Github<span class="_ _1"> </span>Github Actions<span class="_ _1">
                </span
                >Gitlab<span class="_ _1"> </span>Dock<span class="_ _0"></span>er
              </div>
              <div class="t m0 x5 hd y34 ff3 fs1 fc1 sc0 ls0 wsc">
                Y<span class="_ _2"></span>AML/MD<span class="_ _1"> </span
                >Bas<span class="_ _0"></span>h Scripting<span class="_ _1">
                </span
                >A<span class="_ _3"></span>WS ( E<span class="_ _0"></span>C2 )
              </div>
              <div class="t m0 x5 hd y35 ff3 fs1 fc1 sc0 ls0 ws2">
                V<span class="_ _3"></span>ault
              </div>
              <div class="t m0 x5 hd y36 ff3 fs1 fc1 sc0 ls0 wsc">
                Jasmine G<span class="_ _0"></span>ate<span class="_ _0"></span
                >way<span class="_ _1"> </span>Da<span class="_ _0"></span>ta
                Analysis ( ED<span class="_ _3"></span>A )
              </div>
              <div class="t m0 x5 hd y37 ff3 fs1 fc1 sc0 ls0 ws2">
                RAS<span class="_ _0"></span>A
              </div>
              <div class="t m0 x1 he y38 ff4 fs2 fc1 sc0 ls0 wsc">
                BHARGHA<span class="_ _2"></span>V RAMAN
              </div>
              <div class="t m0 x1 hf y39 ff4 fs3 fc2 sc0 ls0 wsc">
                Softwar<span class="_ _0"></span>e Engineer ( FullStack W<span
                  class="_ _0"
                ></span
                >eb Dev<span class="_ _0"></span>eloper )
              </div>
              <div class="t m0 x1 h3 y3a ff1 fs0 fc2 sc0 ls0">
                <span class="fc4 sc0">E</span>
              </div>
              <div class="t m0 x6 h10 y3b ff2 fs4 fc2 sc0 ls0 ws5">
                917904895653
              </div>
              <div class="t m0 x7 h3 y3a ff1 fs0 fc2 sc0 ls0">
                <span class="fc4 sc0"></span>
              </div>
              <div class="t m0 x8 h10 y3b ff2 fs4 fc2 sc0 ls0 ws5">
                bhargha<span class="_ _3"></span>vraman8gmail.c<span
                  class="_ _4"
                ></span
                >om
              </div>
              <div class="t m0 x9 h3 y3a ff1 fs0 fc2 sc0 ls0">
                <span class="fc4 sc0">q</span>
              </div>
              <div class="t m0 xa h10 y3b ff2 fs4 fc2 sc0 ls0 wsc">
                www<span class="_ _3"></span>.linkedin.com/in/bhargha<span
                  class="_ _3"
                ></span
                >v-r
              </div>
              <div class="t m0 xb h3 y3a ff1 fs0 fc2 sc0 ls0">
                <span class="fc4 sc0">e</span>
              </div>
              <div class="t m0 xc h10 y3b ff2 fs4 fc0 sc0 ls0 wsc">
                Chennai, TN
              </div>
              <div class="t m0 x1 h11 y3c ff4 fs0 fc3 sc0 ls0 ws6">
                EXPERIENCE
              </div>
              <div class="t m0 x1 h12 y3d ff4 fs5 fc1 sc0 ls0 wsc">
                Softwar<span class="_ _0"></span>e Engineer
              </div>
              <div class="t m0 x1 h7 y9 ff4 fs1 fc2 sc0 ls0 wsc">
                T<span class="_ _3"></span>arento Gr<span class="_ _0"></span
                >oup<span class="_ _5"> </span
                ><span class="ff2 fs0 fc0">Banglore, KA</span>
              </div>
              <div class="t m0 x1 h10 y3e ff2 fs4 fc2 sc0 ls0 wsc">
                A Nordic-Indian compan<span class="_ _0"></span>y which pr<span
                  class="_ _0"
                ></span
                >ovides end-<span class="_ _0"></span>to-end digital and tec<span
                  class="_ _0"
                ></span
                >hnology
              </div>
              <div class="t m0 x1 h10 y3f ff2 fs4 fc2 sc0 ls0 wsc">
                services worldwide.
              </div>
            </div>
            <div class="c xd y1 w4 h2">
              <div class="t m0 x0 h10 y40 ff2 fs4 fc2 sc0 ls0 wsc">
                Dev<span class="_ _0"></span>eloped an
                <span class="ff3"
                  >A<span class="_ _0"></span>gent Perfo<span class="_ _0"></span
                  >rmance Management<span class="ff2">
                    sy<span class="_ _0"></span>stem using R<span
                      class="_ _0"
                    ></span
                    >eact and
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y41 ff2 fs4 fc2 sc0 ls0 wsc">
                typescript for dev<span class="_ _0"></span>elopment, jest &amp;
                enzyme f<span class="_ _0"></span>or DOM testing and St<span
                  class="_ _0"
                ></span
                >orybooks
              </div>
              <div class="t m0 x0 h10 y42 ff2 fs4 fc2 sc0 ls0 wsc">
                for UI Documenta<span class="_ _0"></span>tion.
              </div>
            </div>
            <div class="c xd y3 w4 h4">
              <div class="t m0 x0 h10 y43 ff2 fs4 fc2 sc0 ls0 wsc">
                Conv<span class="_ _0"></span>erted a simple CRA to a nested
                <span class="ff3"
                  >micr<span class="_ _0"></span>o-fr<span class="_ _0"></span
                  >ontend con<span class="_ _0"></span>tainer<span
                    class="_ _0"
                  ></span
                  >-view
                </span>
              </div>
              <div class="t m0 x0 h10 y44 ff3 fs4 fc2 sc0 ls0 ws7">
                archit<span class="_ _0"></span>ecture<span class="ff2 wsc">
                  application during Integra<span class="_ _0"></span>tion and
                  implemented
                  <span class="ff3"
                    >shado<span class="_ _0"></span>w DOM<span class="ff2">
                    </span></span
                ></span>
              </div>
              <div class="t m0 x0 h10 y45 ff2 fs4 fc2 sc0 ls0 wsc">
                with
                <span class="ff3"
                  >web componen<span class="_ _0"></span>ts<span class="ff2">
                    for CSS and JS en<span class="_ _0"></span>capsulation.</span
                  ></span
                >
              </div>
            </div>
            <div class="c xd y5 w4 h5">
              <div class="t m0 x0 h10 y46 ff2 fs4 fc2 sc0 ls0 wsc">
                Ejected r<span class="_ _0"></span>eact-scripts and wr<span
                  class="_ _0"
                ></span
                >ote
                <span class="ff3"
                  >W<span class="_ _0"></span>ebpack 5<span class="ff2">
                    Configurations f<span class="_ _0"></span>or multiple
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y47 ff2 fs4 fc2 sc0 ls0 wsc">
                envir<span class="_ _0"></span>onments t<span class="_ _0"></span
                >o generate differ<span class="_ _0"></span>ent bundles us<span
                  class="_ _0"
                ></span
                >ing its
                <span class="ff3"
                  >lif<span class="_ _0"></span>e-cyc<span class="_ _0"></span>le
                  hooks<span class="ff2">.</span></span
                >
              </div>
            </div>
            <div class="c xd y7 w4 h5">
              <div class="t m0 x0 h10 y46 ff2 fs4 fc2 sc0 ls0 wsc">
                Engineered and s<span class="_ _0"></span>treamlined
                <span class="ff3 ws7"
                  >Doc<span class="_ _0"></span>ker<span class="ff2 wsc">
                    en<span class="_ _0"></span>vironm<span class="_ _0"></span
                    >ent for a highly scaled micr<span class="_ _0"></span
                    >o-</span
                  ></span
                >
              </div>
              <div class="t m0 x0 h10 y47 ff2 fs4 fc2 sc0 ls0 wsc">
                front<span class="_ _0"></span>ed based application using
                <span class="ff3 ws7"
                  >dock<span class="_ _0"></span>er<span class="_ _0"></span
                  >-compose<span class="ff2">.</span></span
                >
              </div>
            </div>
            <div class="c x0 y8 w0 h6">
              <div class="t m0 x1 h12 y48 ff4 fs5 fc1 sc0 ls0 wsc">
                Product Engineer - Mean Stack De<span class="_ _0"></span>veloper
              </div>
              <div class="t m0 x1 h7 y49 ff4 fs1 fc2 sc0 ls0 ws8">
                Hueint<span class="_"> </span
                ><span class="ff2 fs0 fc0 wsc">Chennai, TN</span>
              </div>
              <div class="t m0 x1 h10 y4a ff2 fs4 fc2 sc0 ls0 wsc">
                An EdT<span class="_ _3"></span>ech startup building products to
                ease administra<span class="_ _0"></span>tive bur<span
                  class="_ _0"
                ></span
                >den and
              </div>
              <div class="t m0 x1 h10 y4b ff2 fs4 fc2 sc0 ls0 wsc">
                enable content deliv<span class="_ _0"></span>ery for educational
                institutions.
              </div>
            </div>
            <div class="c xd ya w4 h8">
              <div class="t m0 x0 h10 y4c ff2 fs4 fc2 sc0 ls0 wsc">
                Designed and de<span class="_ _0"></span>veloped
                <span class="ff3"
                  >comple<span class="_ _0"></span>x CRUD capabilities<span
                    class="ff2"
                  >
                    suc<span class="_ _0"></span>h as inline-data
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y4d ff2 fs4 fc2 sc0 ls0 wsc">
                table editing, <span class="ff3">Bulk Upload</span> fr<span
                  class="_ _0"
                ></span
                >om multi-sheet Ex<span class="_ _0"></span>cel file to Database,
                <span class="ff3 ws7">multi-</span>
              </div>
              <div class="t m0 x0 h10 y4e ff3 fs4 fc2 sc0 ls0 wsc">
                step f<span class="_ _0"></span>orm<span class="ff2">
                  submissions, multi-entity o<span class="_ _0"></span>perations,
                  etc.</span
                >
              </div>
            </div>
            <div class="c xd yc w4 h9">
              <div class="t m0 x0 h10 y4f ff2 fs4 fc2 sc0 ls0 wsc">
                Designed and Implement<span class="_ _0"></span>ed a
                <span class="ff3"
                  >commenting s<span class="_ _0"></span>ystem<span class="ff2">
                    with Lik<span class="_ _0"></span>e-Dislik<span
                      class="_ _0"
                    ></span
                    >e featur<span class="_ _0"></span>e
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y50 ff2 fs4 fc2 sc0 ls0 wsc">
                and Engineered a
                <span class="ff3"
                  >n<span class="_ _0"></span>otification service<span
                    class="ff2"
                  >
                    us<span class="_ _0"></span>ing
                    <span class="ff3"
                      >web sock<span class="_ _0"></span>ets<span class="ff2">
                        and </span
                      ><span class="ws7"
                        >sock<span class="_ _0"></span>et.io<span class="ff2"
                          >.</span
                        ></span
                      ></span
                    ></span
                  ></span
                >
              </div>
            </div>
            <div class="c xd ye w4 h9">
              <div class="t m0 x0 h10 y51 ff2 fs4 fc2 sc0 ls0 wsc">
                Statistically consolidat<span class="_ _0"></span>ed large data
                sets f<span class="_ _0"></span>or
                <span class="ff3"
                  >data analy<span class="_ _0"></span>sis<span class="ff2">
                    and </span
                  >visualised
                </span>
              </div>
              <div class="t m0 x0 h10 y52 ff2 fs4 fc2 sc0 ls0 wsc">
                multiple
                <span class="ff3 ws7"
                  >dashboar<span class="_ _0"></span>ds<span class="ff2 wsc">
                    for diff<span class="_ _0"></span>eren<span
                      class="_ _0"
                    ></span
                    >t use cases using
                    <span class="ff3 ws7"
                      >d3<span class="_ _0"></span>.<span class="_ _0"></span
                      >js<span class="ff2 wsc"> and </span>echarts<span
                        class="ff2"
                        >.</span
                      ></span
                    ></span
                  ></span
                >
              </div>
            </div>
            <div class="c xd y10 w4 h9">
              <div class="t m0 x0 h10 y53 ff2 fs4 fc2 sc0 ls0 wsc">
                Engineered
                <span class="ff3"
                  >deplo<span class="_ _0"></span>yment pipelin<span
                    class="_ _0"
                  ></span
                  >es<span class="ff2"> and implemented </span>CI/CD aut<span
                    class="_ _0"
                  ></span
                  >omations
                </span>
              </div>
              <div class="t m0 x0 h10 y54 ff3 fs4 fc2 sc0 ls0 ws7">
                sys<span class="_ _0"></span>tems<span class="ff2 wsc">
                  using GitHub actions.</span
                >
              </div>
            </div>
            <div class="c x0 y8 w0 h6">
              <div class="t m0 x1 h12 y55 ff4 fs5 fc1 sc0 ls0 wsc">
                AI-Intern Pr<span class="_ _0"></span>oduct Engineer
              </div>
              <div class="t m0 x1 h7 y56 ff4 fs1 fc2 sc0 ls0 ws9">
                Hueint<span class="_"> </span
                ><span class="ff2 fs0 fc0 wsc">Chennai, TN</span>
              </div>
            </div>
            <div class="c xd y13 w4 h9">
              <div class="t m0 x0 h10 y57 ff2 fs4 fc2 sc0 ls0 wsc">
                Learnt Bas<span class="_ _0"></span>ics of
                <span class="ff3"
                  >BOT fram<span class="_ _0"></span>ewo<span class="_ _0"></span
                  >rk<span class="ff2"
                    >, including: Python, T<span class="_ _3"></span>ensor
                    Flow<span class="_ _3"></span>, Keras,
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y58 ff2 fs4 fc2 sc0 ls0 wsc">
                NumPy<span class="_ _0"></span>, Py<span class="_ _0"></span
                >T<span class="_ _3"></span>orc<span class="_ _0"></span>h.
              </div>
            </div>
            <div class="c xd y15 w4 h5">
              <div class="t m0 x0 h10 y46 ff2 fs4 fc2 sc0 ls0 wsc">
                Dev<span class="_ _0"></span>eloped and Integrated a
                <span class="ff3 ws7"
                  >C<span class="_ _0"></span>hatbot<span class="ff2 wsc">
                    us<span class="_ _0"></span>ing
                    <span class="ff3 ws7"
                      >RAS<span class="_ _0"></span>A<span class="ff2 wsc">
                        framew<span class="_ _0"></span>ork and W<span
                          class="_ _0"
                        ></span
                        >orked on
                      </span></span
                    ></span
                  ></span
                >
              </div>
              <div class="t m0 x0 h10 y47 ff2 fs4 fc2 sc0 ls0 wsc">
                integration to the applica<span class="_ _0"></span>tion for
                seamless w<span class="_ _0"></span>orking.
              </div>
            </div>
            <div class="c xd y16 w4 ha">
              <div class="t m0 x0 h10 y59 ff2 fs4 fc2 sc0 ls0 wsc">
                Utilized <span class="ff3 ws7">Python</span> to perform
                <span class="ff3 ws7"
                  >ED<span class="_ _3"></span>A<span class="ff2 wsc">
                    on various data sets and assis<span class="_ _0"></span>ted on
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y5a ff2 fs4 fc2 sc0 ls0 wsc">
                implementing
                <span class="ff3">deep learning algorithms</span> f<span
                  class="_ _0"
                ></span
                >or advanced document par<span class="_ _0"></span>sing
              </div>
              <div class="t m0 x0 h10 y5b ff2 fs4 fc2 sc0 ls0 wsc">
                and OCR use cases.
              </div>
            </div>
            <div class="c xd y18 w4 h5">
              <div class="t m0 x0 h10 y5c ff2 fs4 fc2 sc0 ls0 wsc">
                Creat<span class="_ _0"></span>ed production grade
                <span class="ff3">REST APIs</span> f<span class="_ _0"></span>or a
                <span class="ff3"
                  >Library Management Sy<span class="_ _0"></span>stem<span
                    class="ff2"
                  >
                  </span
                ></span>
              </div>
              <div class="t m0 x0 h10 y5d ff2 fs4 fc2 sc0 ls0 wsc">
                using NodeJS and MongoDB.
              </div>
            </div>
            <div class="c x0 y8 w0 h6">
              <div class="t m0 x1 h12 y5e ff4 fs5 fc1 sc0 ls0 wsa">
                Accounting-In<span class="_ _0"></span>tern
              </div>
              <div class="t m0 x1 h7 y5f ff4 fs1 fc2 sc0 ls0 wsb">
                T<span class="_ _3"></span>riad<span class="_"> </span
                ><span class="ff2 fs0 fc0 wsc">Chennai, TN</span>
              </div>
              <div class="t m0 x1 h10 y60 ff2 fs4 fc2 sc0 ls0 wsc">
                A private Out<span class="_ _0"></span>sourcing/off<span
                  class="_ _0"
                ></span
                >shoring, Inf<span class="_ _0"></span>ormation T<span
                  class="_ _3"
                ></span
                >echnology and Services
              </div>
              <div class="t m0 x1 h10 y61 ff2 fs4 fc2 sc0 ls0 wsc">
                company f<span class="_ _0"></span>ocuses on product inno<span
                  class="_ _0"
                ></span
                >vation and de<span class="_ _0"></span>velopm<span
                  class="_ _0"
                ></span
                >ent.
              </div>
            </div>
            <div class="c xd y1b w4 h5">
              <div class="t m0 x0 h10 y62 ff2 fs4 fc2 sc0 ls0 wsc">
                Affiliated with a
                <span class="ff3"
                  >Mark<span class="_ _3"></span>et Research<span class="ff2">
                    to s<span class="_ _0"></span>hift to a ne<span
                      class="_ _0"
                    ></span
                    >w ERP syst<span class="_ _0"></span>em and assist<span
                      class="_ _0"
                    ></span
                    >ed
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y63 ff2 fs4 fc2 sc0 ls0 wsc">
                in digitalizing accounts data an<span class="_ _0"></span>d
                creating r<span class="_ _0"></span>equirement documen<span
                  class="_ _0"
                ></span
                >ts.
              </div>
            </div>
            <div class="c xd y1d w4 h5">
              <div class="t m0 x0 h10 y64 ff2 fs4 fc2 sc0 ls0 wsc">
                Ass<span class="_ _0"></span>isted with
                <span class="ff3"
                  >Statutory analys<span class="_ _0"></span>is<span class="ff2"
                    >, </span
                  ><span class="ws7">GSTRA2AGSTR3B</span
                  ><span class="ff2">
                    submis<span class="_ _0"></span>sions, pa<span
                      class="_ _0"
                    ></span
                    >yroll
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y65 ff2 fs4 fc2 sc0 ls0 wsc">
                management and tax filings.
              </div>
            </div>
            <div class="c xd y1f w4 h5">
              <div class="t m0 x0 h10 y66 ff2 fs4 fc2 sc0 ls0 wsc">
                Instigated and Implement<span class="_ _0"></span>ed a lean
                initiative f<span class="_ _0"></span>or the creation of multiple
              </div>
              <div class="t m0 x0 h10 y67 ff3 fs4 fc2 sc0 ls0 wsc">
                Excel macr<span class="_ _0"></span>os<span class="ff2">
                  to incr<span class="_ _0"></span>ease productivity<span
                    class="_ _3"
                  ></span
                  >.</span
                >
              </div>
            </div>
            <div class="c xd y21 w4 h5">
              <div class="t m0 x0 h10 y51 ff2 fs4 fc2 sc0 ls0 wsc">
                Prepar<span class="_ _0"></span>ed and enter<span
                  class="_ _0"
                ></span
                >ed journal entries in
                <span class="ff3 ws7"
                  >T<span class="_ _3"></span>ally<span class="ff2 wsc"
                    >, including th<span class="_ _0"></span>e recor<span
                      class="_ _0"
                    ></span
                    >ding of
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y52 ff2 fs4 fc2 sc0 ls0 wsc">
                re<span class="_ _0"></span>venue, billings and a<span
                  class="_ _0"
                ></span
                >djustment entries.
              </div>
            </div>
            <div class="c x0 y8 w0 h6">
              <div class="t m0 x1 h11 y68 ff4 fs0 fc3 sc0 ls0 ws6">
                EDUCA<span class="_ _3"></span>TION
              </div>
              <div class="t m0 x1 h12 y69 ff4 fs5 fc1 sc0 ls0 wsc">
                B.<span class="_ _0"></span>COM in Information Sy<span
                  class="_ _0"
                ></span
                >stems Management
              </div>
              <div class="t m0 x1 h13 y6a ff4 fs1 fc2 sc0 ls0 wsc">
                Ramakrishna Mission Vivekananda College
              </div>
              <div class="t m0 xe h7 y6b ff2 fs0 fc0 sc0 ls0 wsc">
                Chennai, Mylapore
              </div>
              <div class="t m0 x5 h11 y3c ff4 fs0 fc3 sc0 ls0 ws6">SUMMARY</div>
              <div class="t m0 x5 hd y6c ff2 fs1 fc2 sc0 ls0 wsc">
                Softwar<span class="_ _0"></span>e Engineer with ~2 years e<span
                  class="_ _0"
                ></span
                >xperience
              </div>
              <div class="t m0 x5 hd y6d ff2 fs1 fc2 sc0 ls0 wsc">
                building high scale pr<span class="_ _0"></span>oducts in the
                consumer
              </div>
              <div class="t m0 x5 hd y6e ff2 fs1 fc2 sc0 ls0 wsc">
                and Edtec<span class="_ _0"></span>h space. Experienced in full
                project
              </div>
              <div class="t m0 x5 hd y6f ff2 fs1 fc2 sc0 ls0 wsc">
                life c<span class="_ _0"></span>yc<span class="_ _0"></span>le
                from Des<span class="_ _0"></span>ign, Develo<span
                  class="_ _0"
                ></span
                >pment, Integration
              </div>
              <div class="t m0 x5 hd y70 ff2 fs1 fc2 sc0 ls0 wsc">
                to Deploymen<span class="_ _0"></span>t and Server management.
              </div>
              <div class="t m0 x5 h11 y71 ff4 fs0 fc3 sc0 ls0 wsc">
                ADDITIONAL EXPERIENCE
              </div>
              <div class="t m0 x5 h12 y72 ff4 fs5 fc1 sc0 ls0 wsc">
                Notable Work<span class="_ _0"></span>s
              </div>
            </div>
            <div class="c xf y24 w5 hb">
              <div class="t m0 x0 h10 y73 ff2 fs4 fc2 sc0 ls0 wsc">
                Dev<span class="_ _0"></span>eloped a POC implementing
                <span class="ff3 ws7"
                  >V<span class="_ _3"></span>ault<span class="ff2 wsc">
                    and
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y74 ff2 fs4 fc2 sc0 ls0 wsc">
                demonstrated
                <span class="ff3 ws7"
                  >De<span class="_ _0"></span>vSecOps<span class="ff2 wsc"
                    >. Engineer<span class="_ _0"></span>ed a pipeline
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y75 ff2 fs4 fc2 sc0 ls0 wsc">
                and integrated v<span class="_ _0"></span>ault for
                <span class="ff3"
                  >secr<span class="_ _0"></span>ets managemen<span
                    class="_ _0"
                  ></span
                  >t<span class="ff2">. </span></span
                >
              </div>
              <div class="t m0 x0 h10 y76 ff2 fs4 fc2 sc0 ls0 wsc">
                The pipeline pus<span class="_ _0"></span>hes the build to another
                <span class="ff3">A<span class="_ _3"></span>WS </span>
              </div>
              <div class="t m0 x0 h10 y5c ff3 fs4 fc2 sc0 ls0 wsc">
                instance
                <span class="ff2"
                  >us<span class="_ _0"></span>ing SSH, giving it the ability to
                  <span class="ff3 ws7">scale</span>
                </span>
              </div>
              <div class="t m0 x0 h10 y5d ff2 fs4 fc2 sc0 ls0 wsc">
                for multiple en<span class="_ _0"></span>vironm<span
                  class="_ _0"
                ></span
                >ents and clus<span class="_ _0"></span>ter nodes.
              </div>
            </div>
            <div class="c xf y26 w5 h8">
              <div class="t m0 x0 h10 y77 ff2 fs4 fc2 sc0 ls0 wsc">
                Dev<span class="_ _0"></span>eloped a POC to demonstrate RabbitMQ
                an<span class="_ _0"></span>d
              </div>
              <div class="t m0 x0 h10 y78 ff2 fs4 fc2 sc0 ls0 wsc">
                Redis implementation f<span class="_ _0"></span>or
                <span class="ff3">Message Queuing</span> and
              </div>
              <div class="t m0 x0 h10 y79 ff3 fs4 fc2 sc0 ls0 ws7">
                Caching<span class="ff2">.</span>
              </div>
            </div>
            <div class="c xf y28 w5 hc">
              <div class="t m0 x0 h10 y7a ff2 fs4 fc2 sc0 ls0 wsc">
                Wr<span class="_ _0"></span>ote an Article on
                <span class="ff3"
                  >Micro-F<span class="_ _0"></span>ron<span class="_ _0"></span
                  >tend Arc<span class="_ _0"></span>hitecture
                </span>
              </div>
              <div class="t m0 x0 h10 y7b ff2 fs4 fc2 sc0 ls0 wsc">
                with React using
                <span class="ff3"
                  >Shado<span class="_ _0"></span>w DOM<span class="ff2"
                    >: Detailing the
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y7c ff2 fs4 fc2 sc0 ls0 wsc">
                Basics, the Best practices and w<span class="_ _0"></span>ay<span
                  class="_ _0"
                ></span
                >s to implement<span class="fc4 sc0"> </span>
              </div>
              <div class="t m0 x0 h10 y7d ff2 fs4 fc2 sc0 ls0 wsc">
                it in any applica<span class="_ _0"></span>tion.
              </div>
            </div>
            <div class="c xf y2a w5 h4">
              <div class="t m0 x0 h10 y76 ff2 fs4 fc2 sc0 ls0 wsc">
                Implemented and Configur<span class="_ _0"></span>ed
                <span class="ff3"
                  >Jasmine Server<span class="_ _0"></span
                  ><span class="ff2"> - </span></span
                >
              </div>
              <div class="t m0 x0 h10 y5c ff2 fs4 fc2 sc0 ls0 wsc">
                an open sour<span class="_ _0"></span>ce
                <span class="ff3"
                  >SMS gate<span class="_ _0"></span>way<span class="ff2">
                    t<span class="_ _0"></span>o send SMS ov<span
                      class="_ _0"
                    ></span
                    >er
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y5d ff2 fs4 fc2 sc0 ls0 ws5">HTTPS.</div>
            </div>
            <div class="c xf y2c w5 h8">
              <div class="t m0 x0 h10 y76 ff2 fs4 fc2 sc0 ls0 wsc">
                Collaborated in De<span class="_ _0"></span>veloping a POC t<span
                  class="_ _0"
                ></span
                >o implement
              </div>
              <div class="t m0 x0 h10 y62 ff3 fs4 fc2 sc0 ls0 ws7">
                T<span class="_ _3"></span>erraf<span class="_ _0"></span>orm<span
                  class="ff2 wsc"
                >
                  and automate
                  <span class="ff3"
                    >Infrastructur<span class="_ _0"></span>e
                  </span></span
                >
              </div>
              <div class="t m0 x0 h10 y63 ff3 fs4 fc2 sc0 ls0 ws7">
                Deplo<span class="_ _0"></span>yment<span class="ff2 wsc">
                  for a dedica<span class="_ _0"></span>ted server<span
                    class="_ _3"
                  ></span
                  >.</span
                >
              </div>
            </div>
            <div class="c x0 y8 w0 h6">
              <div class="t m0 x5 h11 y7e ff4 fs0 fc3 sc0 ls0 ws6">SKILLS</div>
              <div class="t m0 x5 h12 y7f ff4 fs5 fc1 sc0 ls0 wsa">
                Client-<span class="_ _0"></span>Side
              </div>
              <div class="t m0 x5 h12 y80 ff4 fs5 fc1 sc0 ls0 wsa">
                Server<span class="_ _3"></span>-side
              </div>
              <div class="t m0 x5 h12 y81 ff4 fs5 fc1 sc0 ls0 wsc">
                Dev<span class="_ _0"></span>elopment &amp; Operations
              </div>
              <div class="t m0 x5 h12 y82 ff4 fs5 fc1 sc0 ls0 wsa">
                Miscellaneous
              </div>
            </div>
            <a class="l" href="tel:+91-7904895653"
              ><div
                class="d m1"
                style="
                  border-style: none;
                  position: absolute;
                  left: 59.5px;
                  bottom: 748.87213px;
                  width: 63.297874px;
                  height: 10.12763px;
                  background-color: rgba(255, 255, 255, 0.000001);
                "
              ></div></a
            ><a class="l" href="mailto:bharghavraman8@gmail.com"
              ><div
                class="d m1"
                style="
                  border-style: none;
                  position: absolute;
                  left: 141.787231px;
                  bottom: 748.87213px;
                  width: 105.074479px;
                  height: 10.12763px;
                  background-color: rgba(255, 255, 255, 0.000001);
                "
              ></div
            ></a>
          </div>
          <div
            class="pi"
            data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
          ></div>
        </div>
      </div>
      <div class="loading-indicator">
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </div>
    </body>
  </html>`

export default html


