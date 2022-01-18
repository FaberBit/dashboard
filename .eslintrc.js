module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            modules: true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "import/prefer-default-export": "off",
      "import/no-named-as-default": "off",
      "react/prop-types": "off",
      "react/jsx-no-constructed-context-values": "off",
      "no-console": "off",
      "import/no-named-as-default-member": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "no-param-reassign": "off",
      "consistent-return": "off",
      "no-sparse-arrays":"off",
      "react/destructuring-assignment": "off"
    }
}
