import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'
import 'prismjs/plugins/line-highlight/prism-line-highlight'

// Optional: load additional language support
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import ElementHeader from '../ElementHeader'
import ElementFooter from '../ElementFooter'
import ElementSidebar from '../ElementSidebar'

const SyntaxHighlighter = () => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <>
            <ElementHeader />
            {/* <!-- [ Main Content ] start --> */}
            <section class="component-block">
                <div class="container">
                    <div class="row">
                        <ElementSidebar />
                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-10 col-xxl-9 mb-4">
                                    <a href="#" class="d-inline-flex align-items-center d-xl-none btn btn-dark mb-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_component"
                                    ><i class="ti ti-menu-2 me-2"></i> Explore Components
                                    </a>
                                    <h2>Syntax Highlighter</h2>
                                    <p class="text-muted">Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in millions of websites, including some of those you visit daily.</p>
                                    <div>
                                        <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://prismjs.com/">
                                            <i class="ti ti-external-link me-1"></i>
                                            Reference
                                        </a>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- [ Main Content ] start --> */}
                            <div class="row">
                                {/* <!-- [ Basic-Usage ] start --> */}
                                <div class="col-sm-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h5>Basic Usage</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>The recommended way to mark up a code block (both for semantics and for Prism) is a
                                                <code>&lt;pre&gt;</code> element with
                                                a element <code>&lt;code&gt;</code> inside, like so:</p>
                                            <h6 class="m-t-20 f-w-600">Code:</h6>
                                            <pre>
                                                <code class="language-markup">
                                                    {`<pre>
  <code class="language-css">
    p {
       color: #1abc9c;
     }
    </code>
 </pre>`}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- [ Basic-Usage ] end --> */}

                                {/* <!-- [ HTms-Markup ] start --> */}
                                <div class="col-sm-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h5>HTML Markup</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>Use the following code to use HTML syntax highlighter.</p>
                                            <h6 class="m-t-20 f-w-600">Usage:</h6>
                                            <pre>
                                                <code class="language-markup">
                                                    {` <pre>
    <code class="language-markup">
      HTML CODE ...
    </code>
 </pre>
                                                    `}                                                </code>
                                            </pre>
                                            <h6 class="m-t-20 f-w-600">Example:</h6>
                                            <pre>
                                                <code class="language-markup">
                                                    {` <div class="card">
  <div class="card-header">
     <h5>Hello card</h5>
      <span> lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
       <div class="card-header-right">
         <i class="icofont icofont-rounded-down"></i>
         <i class="icofont icofont-refresh"></i>
         <i class="icofont icofont-close-circled"/>
        </div>
    </div>
   <div class="card-body">
       <p>
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
       </p>
   </div>
  </div>
                                                   `}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- [ HTms-Markup ] end --> */}

                                {/* <!-- [ Css-Markup ] start --> */}
                                <div class="col-sm-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h5>CSS Markup</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>Use the following code to use CSS syntax highlighter.</p>
                                            <h6 class="m-t-20 f-w-600">Example:</h6>
                                            <pre>
                                                <code class="language-css">
                                                    {`  a:active{
         color:#1abc9c;
   }
     p{
         font - size:13px;
   }
     .btn-primary{
         color: #1abc9c;
     background-color: #fff;
   }
     .label-primary {
         background - color: #1abc9c;
   }
     .badge-primary {
         background - color: #1abc9c;
   }
     .bg-primary {
         background - color: #1abc9c !important;
     color: #fff;
   }
     .panel-primary {
         border - color: #1abc9c;
}
                                                        `}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- [ Css-Markup ] end --> */}

                                {/* <!-- [ Line-Number ] start --> */}
                                <div class="col-sm-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h5>Line Number</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>Line number at the beginning of code lines.</p>
                                            <p>Obviously, this is supposed to work only for code blocks (<code>&lt;pre&gt;&lt;code&gt;</code>) and
                                                not for inline code.
                                                Add class line-numbers to your desired <code>&lt;pre&gt;</code> and line-numbers plugin will take
                                                care.</p>
                                            <p>Optional: You can specify the data-start (Number) attribute on the <code>&lt;pre&gt;</code>
                                                element. It will shift the
                                                line counter.</p>
                                            <h6 class="m-t-20 f-w-600">Usage:</h6>
                                            <pre class="line-numbers language-js">
                                                <code class=" language-js">
                                                    <pre class="line-numbers">
                                                        <code class="language-css">
                                                            {`p {
    color: red;
   }
`}
                                                        </code>
                                                    </pre>;
                                                </code>
                                            </pre>
                                            <h6 class="m-t-20 f-w-600">Example:</h6>
                                            <pre class="line-numbers">
                                                <code class="language-js">
                                                {` (function() {
    if (typeof self==='undefined' || !self.Prism || !self.document) {
       return;
   }
});
`}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- [ Line-Number ] end --> */}

                                {/* <!-- [ Line-Highlight ] start --> */}
                                <div class="col-sm-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h5>Line Highlight</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>Highlights specific lines and/or line ranges.</p>
                                            <p>You specify the lines to be highlighted through the data-line attribute on the
                                                <code>&lt;pre&gt;</code> element, in the
                                                following simple format:</p>
                                            <ol>
                                                <li>A single number refers to the line with that number</li>
                                                <li>Ranges are denoted by two numbers, separated with a hyphen (-)</li>
                                                <li>Multiple line numbers or ranges are separated by commas.</li>
                                                <li>Whitespace is allowed anywhere and will be stripped off.</li>
                                            </ol>
                                            <h6 class="m-t-20 f-w-600">Usage:</h6>
                                            <pre>
                                                <code class="language-markup">
                                                   {` <pre data-line="2,4, 8-10">
     <code class="language-css">
       p {
         color: red
        }
     </code>
 </pre>
     `}
                                                </code>
                                            </pre>
                                            <h6 class="m-t-20 f-w-600">Example:</h6>
                                            <pre data-line="2,4,7-9">
                                                <code class="language-css">
           {` pre.line-numbers {
      position: relative;
      padding-left: 3.8em;
      counter-reset: linenumber;
    
      pre.line-numbers > code {
      position: relative;
      }

      .line-numbers .line-numbers-rows {
          position: absolute;
      pointer-events: none;
      top: 0;
      font-size: 100%;
      left: -3.8em;
      width: 3em;
      /* works for line-numbers below 1000 lines */
      letter-spacing: -1px;
      border-end: 1px solid #999;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
         }`}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- [ Line-Highlight ] end --> */}
                            </div>
                            {/* <!-- [ Main Content ] end --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- [ Main Content ] end --> */}
            <ElementFooter />
        </>
    )
}

export default SyntaxHighlighter