import style from "@/styles/modules/crm/components/footer.module.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={style.footer}>Isaque Duarte &copy; {currentYear}</footer>
  );
}

export default Footer