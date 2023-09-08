import { Component } from 'solid-js';
import { Icon } from 'solid-heroicons';
import { emojiSad } from 'solid-heroicons/outline';
import { useAppState } from '../AppContext';

const FourOhFour: Component = () => {
  const { t } = useAppState();

  return (
    <div>
      <div class="flex flex-col justify-center content-center text-center rounded-2xl m-10 bg-gray-100 dark:bg-gray-800 py-10 text-solid-medium">
        <div class="my-10 py-10">
          <Icon
            class="m-auto w-40 text-solid-default dark:text-solid-darkdefault"
            path={emojiSad}
          />
          <h2 class="mt-5 text-4xl font-semibold">{t('global.404.header')}</h2>
          <h2 class="text-2xl text-solid-gray">
            <a class="text-solid-medium" href="https://github.com/solidjs/solid-router">
              @solidjs/router
            </a>{' '}
            {t('global.404.body')}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
