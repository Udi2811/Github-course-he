/* ====================================================================
   speech.js — הסבר קולי בעברית (Web Speech API) + נפילה בטוחה
   ==================================================================== */
(function () {
  "use strict";

  var synth = window.speechSynthesis || null;
  var supported = !!synth && typeof SpeechSynthesisUtterance !== "undefined";
  var currentUtter = null;
  var voices = [];

  function loadVoices() {
    if (!supported) return;
    voices = synth.getVoices() || [];
  }
  if (supported) {
    loadVoices();
    if (typeof synth.onvoiceschanged !== "undefined") {
      synth.onvoiceschanged = loadVoices;
    }
  }

  function hebrewVoice() {
    return voices.find(function (v) { return /he|iw/i.test(v.lang); }) || null;
  }

  function hasHebrew() { return !!hebrewVoice(); }

  function stop() {
    if (supported) { try { synth.cancel(); } catch (e) {} }
    currentUtter = null;
  }

  function speak(text, opts) {
    opts = opts || {};
    if (!supported) { opts.onUnsupported && opts.onUnsupported(); return false; }
    stop();
    var u = new SpeechSynthesisUtterance(text);
    var hv = hebrewVoice();
    if (hv) u.voice = hv;
    u.lang = hv ? hv.lang : "he-IL";
    u.rate = opts.rate || (window.Store ? window.Store.state.speech.rate : 1) || 1;
    u.onstart = function () { opts.onStart && opts.onStart(); };
    u.onend = function () { opts.onEnd && opts.onEnd(); currentUtter = null; };
    u.onerror = function () { opts.onError && opts.onError(); currentUtter = null; };
    currentUtter = u;
    try { synth.speak(u); } catch (e) { opts.onError && opts.onError(); return false; }
    return true;
  }

  function pause() { if (supported) try { synth.pause(); } catch (e) {} }
  function resume() { if (supported) try { synth.resume(); } catch (e) {} }

  window.Speech = {
    supported: supported,
    hasHebrew: hasHebrew,
    speak: speak,
    stop: stop,
    pause: pause,
    resume: resume,
    reloadVoices: loadVoices,
  };
})();
