import { useState } from 'react';
import { userApi } from '../redux/features/api/userApi';
import { useAppDispatch, useAppSelector } from '../redux/store';

//export userConnected
export const userConnected = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentUser, setCurrentUser] = useState<any>(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useAppSelector((state) => state.userState.user);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();

  await dispatch(userApi.endpoints.getMe.initiate(null));

  if (user) {
    setCurrentUser(user);
  }
  return currentUser;
};
