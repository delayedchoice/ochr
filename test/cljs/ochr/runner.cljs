(ns ochr.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [ochr.core-test]))

(doo-tests 'ochr.core-test)
