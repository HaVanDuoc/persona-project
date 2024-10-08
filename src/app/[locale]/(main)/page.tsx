import LinkComponent from "@/components/common/LinkComponent";
import pathPage from "@/libs/path";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <LinkComponent href={pathPage.about}>{t("about")}</LinkComponent>
    </div>
  );
};

export default HomePage;
