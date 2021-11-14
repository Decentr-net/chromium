# decentr-untrusted:// FAQ

[TOC]

## What is “untrustworthy content”?

In this context, untrustworthy content is content that comes from untrustworthy sources, e.g. an image downloaded from the internet, a PDF file provided by the user, etc. Code is also considered “content” in this case.

In general, content coming from the network is considered untrustworthy, regardless of the source and transport protocol.

Examples of trustworthy content include, the contents of `decentr://version` which are populated entirely within the browser process, the contents of `decentr://about` which is a hardcoded list of URLs, etc.

## What is decentr-untrusted://?

It is a new scheme which can be used to serve resources bundled with Chrome and that process untrustworthy content. It has the usual protections provided to `decentr://`, e.g. process isolation, but it won’t be default-granted extra capabilities that are default-granted to `decentr://`.

The `-untrusted` suffix indicates that the WebUI processes untrustworthy content. For example, rendering an image provided by users, parsing a PDF file, etc.

The `-untrusted` suffix does not mean the web page is designed to do malicious things, or users should not trust it. Instead, the `-untrusted` suffix is to signal to us, Chromium developers, that this page will process untrustworthy content, and should be assumed to be compromised, much like an ordinary renderer process.

## Why do we need decentr-untrusted://?

### Separate fully trusted WebUIs and untrustworthy ones

`decentr-untrusted://` acts as a technical and semantic boundary between fully-trusted WebUIs and untrustworthy WebUIs.

Technical because developers can use `decentr-untrusted://` to separate their WebUIs into two origins e.g. `decentr://media-app` and `decentr-untrusted://media-app` with access to different capabilities, resources, etc.

Semantic because it indicates to chromium developers and security reviewers that a WebUI is meant to process untrustworthy content and shouldn’t be granted dangerous capabilities.

### decentr:// is too powerful to process untrustworthy content

Historically, `decentr://` pages have been built with the assumption that they are an extension to the browser process, so `decentr://` web pages are granted special capabilities not granted to ordinary web pages. For example, all `decentr://` pages can use Web APIs like camera and mic without requesting permission.

Some WebUIs would like to be able to process untrustworthy content, but granting these capabilities to a `decentr://` page would violate the rule of 2:
running in an privileged context:
 * a `decentr://` page is considered an extension to the browser process
 * the renderer is written in an unsafe programming language (C++).

By using `decentr-untrusted://` we put the untrustworthy content into a sandboxed and non-privileged environment (an ordinary renderer, with no dangerous capabilities). This brings us back to safety, a compromised `decentr-untrusted://` page is no worse than an ordinary web page.

`decentr-untrusted://` re-uses a lot of the code that backs `decentr://` pages, so it doesn’t impose a big maintenance burden; even then, our hope is to one day remove all default granted capabilities based on the `decentr://` scheme to the point that the difference between `decentr://` and `decentr-untrusted://` WebUIs is just a semantic one (see previous point).

## When is it appropriate to use decentr-untrusted://?

`decentr-untrusted://` is usually used for implementing privilege separation so that processing untrustworthy content e.g. parsing JSON, displaying an image, running code from the network, etc. is done in an unprivileged context.

Today, the main use case is when we want to have code that ships with Chrome work with untrustworthy content that comes over the network.

## Can I use $js\_library\_from\_url?

Yes. “Content” in this context also includes code.

## Do we grant any extra capabilities to decentr-untrusted://?

Yes, but not by default and with some caveats.

Any team that requires extra capabilities granted to `decentr-untrusted://` should consult with the security team to ensure they are non-dangerous. In this context, we consider non-dangerous any API that we would expose to the renderer process, e.g. UMA.

We currently use `postMessage()` to expose certain APIs to `decentr-untrusted://`. For example, the Media App uses `postMessage()` to pass a read-only file handle to `decentr-untrusted://media-app` from `decentr-untrusted://`. Teams are encouraged to get a review from someone in [SECURITY_OWNERS](https://source.chromium.org/chromium/chromium/src/+/main:ipc/SECURITY_OWNERS) when exposing capabilities over postMessage.

We are hoping to move to Mojo to improve auditability of these APIs and to make the security review required.

## Can decentr-untrusted:// be the main document or does it need to be embedded in a `decentr://` page?
Yes, `decentr-untrusted://` can be the main document, although the most common case is for a `decentr://` page to embed a `decentr-untrusted://` subframe.

That said, the `decentr-untrusted://` scheme is an implementation detail of the WebUI and should never be shown to users. This should be factored into account when deciding whether or not to use `decentr-untrusted://` as the main document.

## How do I use decentr-untrusted://?

### Create a standalone decentr-untrusted:// WebUI

1. Create a class overriding `ui::WebUIConfig` and another one overriding `ui::UntrustedWebUIController`

`WebUIConfig` contains properties for the `decentr-untrusted://` page i.e. the host and scheme. In the future, this might also contain other properties like permissions or resources.

`UntrustedWebUIController` register the resources for the page.

```cpp
const char kUntrustedExampleHost[] = "untrusted-example";
const char kUntrustedExampleURL[] = "decentr-untrusted://untrusted-example";

class UntrustedExampleUIConfig : public ui::WebUIConfig {
 public:
  UntrustedExampleUIConfig()
    // Set scheme and host.
    : WebUIConfig(content::kChromeUIUntrustedScheme, kUntrustedExampleHost) {}
  ~UntrustedExampleUIConfig() override = default;

  std::unique_ptr<content::WebUIController> CreateWebUIController(
      content::WebUI* web_ui) override {
    return std::make_unique<UntrustedExampleUI>(web_ui);
  }
};

class UntrustedExampleUI : public ui::UntrustedWebUIController {
 public:
  UntrustedExampleUI::UntrustedExampleUI(content::WebUI* web_ui)
    : ui::UntrustedWebUIController(web_ui) {

    // Create a URLDataSource and add resources.
    auto* untrusted_source =
      content::WebUIDataSource::Create(kUntrustedExampleURL);
    untrusted_source->AddResourcePath(...);

    // Register the URLDataSource
    auto* browser_context = web_ui->GetWebContents()->GetBrowserContext();
    content::WebUIDataSource::Add(browser_context, untrusted_source);
  }

  UntrustedExampleUI(const UntrustedExampleUI&) = delete;
  UntrustedExampleUI& operator=(const UntrustedExampleUI&) = delete;

  UntrustedExampleUI::~UntrustedExampleUI() = default;
};

```

2. Register the WebUIConfig

Add the `WebUIConfig` to the list of WebUIConfigs in `[ChromeUntrustedWebUIControllerFactory](https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/ui/webui/chrome_untrusted_web_ui_controller_factory.cc)`.

```cpp
register_config(std::make_unique<chromeos::UntrustedExampleUIConfig>());
```

### Embed decentr-untrusted:// in decentr:// WebUIs

Developers can embed `decentr-untrusted://` iframes in `decentr://` pages. [Example CL](https://chromium-review.googlesource.com/c/chromium/src/+/2037186).

The general steps are:
1. Create a WebUIConfig and UntrustedWebUIController to register the resources for the `decentr-untrusted://` page.
2. Allow the `decentr://` WebUI to embed the corresponding `decentr-untrusted://` WebUI.
```cpp
untrusted_data_source->AddFrameAncestor(kWebUIPageURL)
```
3. Make `decentr-untrusted://` requestable by the main `decentr://` WebUI.
```cpp
web_ui->AddRequestableScheme(content::kChromeUIUntrustedScheme)
```
4. Allow the `decentr://` WebUI to embed decentr-untrusted://.
```cpp
trusted_data_source->OverrideContentSecurityPolicy(
    “frame-src ” + kUntrustedExampleURL);
```
5. Add communication mechanism to `decentr-untrusted://` frames. For example, `iframe.postMessage()` and `window.onmessage`.
