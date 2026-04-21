import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/userInfoSlice";

export const useUserInforActions = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const handleLoginSync = (userData:any, accessToken?:string) => {
        dispatch(loginSuccess({
            user : userData,
            accessToken : accessToken
        }));

        router.push("/menus");
        router.refresh();
    }
    return handleLoginSync;
};