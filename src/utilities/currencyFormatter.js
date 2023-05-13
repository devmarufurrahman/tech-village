export const currencyFormatter = (price) => {
	if (!price) return;
	return price.toLocaleString("bn-BD", { style: "currency", currency: "BDT" });
};
