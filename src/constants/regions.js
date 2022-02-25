export default function regions(region) {
    let regionAbbreviation = "";
  
    switch (region) {
        case "Acre":
            regionAbbreviation = "AC";
            break;
        case "Alagoas":
            regionAbbreviation = "AL";
            break;
        case "Amapá":
            regionAbbreviation = "AP";
            break;
        case "Amazonas":
            regionAbbreviation = "AM";
            break;
        case "Bhaia":
            regionAbbreviation = "BA";
            break;
        case "Ceará":
            regionAbbreviation = "CE";
            break;
        case "Espírito Santo":
            regionAbbreviation = "ES";
            break;
        case "Goiás":
            regionAbbreviation = "GO";
            break;
        case "Maranhão":
            regionAbbreviation = "MA";
            break;
        case "Mato Grosso":
            regionAbbreviation = "MT";
            break;
        case "Mato Grosso do Sul":
            regionAbbreviation = "MS";
            break;
        case "Minas Gerais":
            regionAbbreviation = "MG";
            break;
        case "Pará":
            regionAbbreviation = "PA";
            break;
        case "Paraíba":
            regionAbbreviation = "PB";
            break;
        case "Paraná":
            regionAbbreviation = "PR";
            break;
        case "Pernambuco":
            regionAbbreviation = "PE";
            break;
        case "Piauí":
            regionAbbreviation = "PI";
            break;
        case "Rio de Janeiro":
            regionAbbreviation = "RJ";
            break;
        case "Rio Grande do Norte":
            regionAbbreviation = "RN";
            break;
        case "Rio Grande do Sul":
            regionAbbreviation = "RS";
            break;
        case "Rondônia":
            regionAbbreviation = "RO";
            break;
        case "Roraima":
            regionAbbreviation = "RR";
            break;
        case "Santa Catarina":
            regionAbbreviation = "SC";
            break;
        case "São Paulo":
            regionAbbreviation = "SP";
            break;
        case "Sergipe":
            regionAbbreviation = "SE";
            break;
        case "Tocantins":
            regionAbbreviation = "TO";
        break;
        case "Distrito Federal":
            regionAbbreviation = "DF"

    } return regionAbbreviation;
  }