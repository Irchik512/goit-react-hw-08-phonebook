import { useSelector } from "react-redux";
import {selectIsRefreshing, selectIsLoggedIn ,selectUser} from 'redux/auth'

export const useAuth = () => {
  return {
    isLogetIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};