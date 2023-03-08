import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="bg-indigo-800 p-3 text-gray-200">
      <div className="container mx-auto flex justify-between items-center gap-2">
        <div className="flex-1 pl-5 text-3xl font-bold">
          {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ``}
        </div>
        <div className="flex-none justify-end">
            <div className="dropdown">
                {sessionData?.user ? (
                    <button
                        className="rounded-full"
                        onClick={() => void signOut()}
                    >
                        <div className="w-10 rounded-full overflow-hidden">
                            {sessionData?.user?.image && (
                                <img src={sessionData?.user?.image} alt={sessionData?.user?.name ?? 'User avatar'} />
                            )}
                        </div>
                    </button>
                ) : (
                    <button className="border rounded-md text-slate-100 border-current px-2 py-1" onClick={() => void signIn()}>
                        Sign in
                    </button>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};
