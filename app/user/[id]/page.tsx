import { useRouter } from "next/router";
import { getUserProfile } from "@/lib/api";

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const userProfile = await getUserProfile(id);
  return { props: { userProfile } };
}

export default function UserProfile({
  userProfile,
}: {
  userProfile: UserProfileType;
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userProfile.name}</h1>
      <p>{userProfile.bio}</p>
    </div>
  );
}
