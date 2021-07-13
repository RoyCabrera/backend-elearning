import axios from "axios";

/* let accessToken = "491d3e8fa53914a405bdc84c7a28c1f4";
let endpoint = "c4478df5.compilers.sphere-engine.com"; */

// nuevo token

let accessToken = "5f87053c460b436254f4dc04e24223c5";
let endpoint = "6ce64d1e.compilers.sphere-engine.com";


export const getLenguajes = async (req, res) => {
  const response = await axios.get(
    `https://${endpoint}/api/v4/compilers?access_token=${accessToken}`
  );
  const lenguajes = response.data.items;

  const result = lenguajes.filter(
    (lengua) =>
      lengua.id == 10 ||
      lengua.id == 56 ||
      lengua.id == 29 ||
      lengua.id == 17 ||
      lengua.id == 116 ||
      lengua.id == 117
  );
  res.json({
    lenguajes: result,
  });
};

export const ejecutarCode = async (req, res) => {
  const id_lenguaje = req.body.id_lenguaje;
  const codeEditor = req.body.codeEditor;

  var submissionData = {
    compilerId: parseInt(id_lenguaje),
    source: codeEditor,
  };

  const response = await axios.post(
    `https://${endpoint}/api/v4/submissions?access_token=${accessToken}`,
    submissionData
  );

  const code_submision = response.data.id;

  setTimeout(async function () {
    try {
      const output = await axios.get(
        `https://${endpoint}/api/v4/submissions/${code_submision}/output?access_token=${accessToken}`
      );

      res.json({
        output: output.data,
      });
    } catch (error) {
      const errorSubmission = await axios.get(
        `https://${endpoint}/api/v4/submissions/${code_submision}/error?access_token=${accessToken}`
      );
      res.json({
        output: errorSubmission.data,
      });
    }
  }, 5000);
};
