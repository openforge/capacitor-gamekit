
  Pod::Spec.new do |s|
    s.name = 'CapacitorGamekit'
    s.version = '0.0.1'
    s.summary = 'Allow users to sign in and use the Apple and Google game kit'
    s.license = 'MIT'
    s.homepage = 'https://github.com/openforge/capacitor-gamekit'
    s.author = 'Openforge'
    s.source = { :git => 'https://github.com/openforge/capacitor-gamekit', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end