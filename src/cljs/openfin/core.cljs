(ns openfin.core)

(def system js/fin.desktop.System)
(def application js/fin.desktop.Application)


(defn version []
  (.getVersion system #(prn %)))

(defn current-app []
  (.getCurrent application))

(defn dev-tools []
  (let [app (current-app)]
    (prn current-app)
    (.showDeveloperTools system (.-uuid app) (.-uuid app))))
