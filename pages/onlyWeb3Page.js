export default function OnlyWeb3Page() {
  return (
    <>
      <h1>only web3 page!</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const referer = req.headers.referer;

  if (!referer) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Will be passed to the page component as props
  };
}
