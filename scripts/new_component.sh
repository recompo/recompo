#!/usr/bin/env sh
INDEX_CONTENT="export { default } from './$1'"

COMPONENT_CONTENT="
import React, { FC, PropsWithChildren } from 'react';
import styles from './$1.module.css'


const $1 = () => {
  return <div></div>
}

export default $1
"

mkdir ./src/components/$1 && cd ./src/components/$1 && touch $1.module.css && echo """$COMPONENT_CONTENT""" >$1.tsx && echo $INDEX_CONTENT >index.tsx
