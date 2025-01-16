import BuyResidentialsPage from "@/template/BuyResidentialsPage";

async function BuyResidentials() {
  const res = await fetch("http://localhost:3000/api/profile", { cache: "no-store" });
  const data = await res.json();

  return <BuyResidentialsPage data={data} />;
}

export default BuyResidentials;
