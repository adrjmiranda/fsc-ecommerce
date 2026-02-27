import { AuthErrorCodes } from 'firebase/auth';

interface FirebaseError {
  code: string;
}

export const getFirebaseAuthErrorMessage = (error: unknown): string => {
  if (
    typeof error !== 'object' ||
    error === null ||
    !('code' in error) ||
    typeof (error as FirebaseError).code !== 'string'
  ) {
    return 'Ocorreu um erro inesperado. Tente novamente.';
  }

  const { code } = error as FirebaseError;

  const errors: Record<string, string> = {
    [AuthErrorCodes.INVALID_LOGIN_CREDENTIALS]: 'E-mail ou senha incorretos.',
    [AuthErrorCodes.USER_DELETED]: 'Usuário não encontrado.',
    [AuthErrorCodes.INVALID_PASSWORD]: 'Senha incorreta.',
    [AuthErrorCodes.EMAIL_EXISTS]: 'Este e-mail já está em uso.',
    [AuthErrorCodes.INVALID_EMAIL]: 'Formato de e-mail inválido.',
    [AuthErrorCodes.WEAK_PASSWORD]: 'A senha deve ter pelo menos 6 caracteres.',
    [AuthErrorCodes.USER_DISABLED]: 'Esta conta foi desativada.',

    [AuthErrorCodes.POPUP_CLOSED_BY_USER]:
      'O login foi cancelado (janela fechada).',
    [AuthErrorCodes.POPUP_BLOCKED]: 'O bloqueador de pop-ups impediu o login.',
    [AuthErrorCodes.USER_CANCELLED]: 'Aguarde a janela de login carregar.',
    [AuthErrorCodes.CREDENTIAL_ALREADY_IN_USE]:
      'Este e-mail já está associado a outra conta.',

    [AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER]:
      'Muitas tentativas. Tente novamente mais tarde.',
    'auth/network-request-failed': 'Falha na conexão com a rede.',
  };

  return errors[code] || 'Ocorreu um erro inesperado. Tente novamente.';
};
