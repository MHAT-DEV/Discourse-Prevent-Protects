// Add custom settings
export default {
  name: 'add-custom-settings',
  initialize() {
    const siteSettings = api.container.lookup('site-settings:main');
    siteSettings.add('prevent_protects_enabled', {
      type: 'boolean',
      defaultValue: true,
      requiresRestart: true,
      group: 'plugins',
      section: 'prevent-protects',
      public: true,
      rewrite: true,
      allowGlobalOverride: true,
      showOnChange: true,
      showOnProfile: true,
      showOnMobile: true,
      showOnUserPreferences: true,
      showOnHeader: true,
      showOnAdminUser: true,
      showOnUser: true,
      userVisibilities: ['staff', 'admin']
    });

    siteSettings.add('prevent_protects_message', {
      type: 'text',
      defaultValue: 'คุณคลิกขวา!',
      requiresRestart: true,
      group: 'plugins',
      section: 'prevent-protects',
      public: true,
      rewrite: true,
      allowGlobalOverride: true,
      showOnChange: true,
      showOnProfile: true,
      showOnMobile: true,
      showOnUserPreferences: true,
      showOnHeader: true,
      showOnAdminUser: true,
      showOnUser: true,
      userVisibilities: ['staff', 'admin']
    });
  }
};
