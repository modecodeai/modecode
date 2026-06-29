export const companyDetails = {
  brandName: "Mode Code",
  legalName: "Mode Code Ltd",
  companyNumber: "16177813",
  companyStatus: "Active",
  companyType: "Private limited company",
  incorporatedOn: "12 January 2025",
  website: "https://modecode.co.uk",
  websiteLabel: "Modecode.co.uk",
  email: "hello@modecode.co.uk",
  registeredOffice: [
    "Ribble Court 1 Mead Way",
    "Padiham",
    "Burnley",
    "England",
    "BB12 7NG"
  ],
  portugalTradingAddress: [
    "Rua da Carvalha, nº570",
    "Aldeamento Santa Clara",
    "2400-441 Leiria",
    "Portugal"
  ]
};

export const brandTagline = "Websites, AI tools and prototypes built to work.";

export const registeredOfficeInline =
  companyDetails.registeredOffice.join(", ");

export const portugalTradingAddressInline =
  companyDetails.portugalTradingAddress.join(", ");
