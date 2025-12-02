import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../https";
import { removeUser, setUser } from "../redux/slices/userSlice";

const useLoadData = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUser();
        dispatch(setUser(data.data));
      } catch (error) {
        dispatch(removeUser());
        navigate('/auth');
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [dispatch, navigate])

  return isLoading;
}

export default useLoadData;