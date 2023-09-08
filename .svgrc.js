module.exports = {
  svgoConfig: {
    plugins: [
      { removeViewBox: false },
      { removeXMLNS: true } // This line removes XMLNS attributes.
    ],
  },
};
