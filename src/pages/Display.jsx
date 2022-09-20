import { useTranslation } from "react-i18next";

const Display = () => {
	const { t } = useTranslation(["display"]);

	return (
		<div className="container mt-5">
			
			<h1>{t("hello feeling great!")}</h1>
		</div>
	);
};

export default Display;