import { createPortal } from 'react-dom';

const LoadingScreen = () => {
  const loadingScreenRoot = document.getElementById('loading-screen-root');

  if (!loadingScreenRoot) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-9999 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-white">
      <div className="border-detail border-t-primary h-12 w-12 animate-spin rounded-full border-4" />
      <p className="animate-pulse text-sm font-medium text-gray-500">
        Carregando informações...
      </p>
    </div>,
    loadingScreenRoot,
  );
};

export default LoadingScreen;
