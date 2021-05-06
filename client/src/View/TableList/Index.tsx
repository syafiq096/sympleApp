import React, { useEffect } from 'react';
import {GET_ALL_USERS} from '../../GraphQL/Queries'
import {useQuery} from '@apollo/client';

function Index() {
  const { data } = useQuery(GET_ALL_USERS);

  useEffect(() => {
    if (data) console.log('data :>> ', data);

  }, [data]);

  return <div>{data?.getAllUsers.map((item: any) => {
      return <div key={item.id}>{item.name} / {item.username}</div>
  })}</div>;
}

export default Index
